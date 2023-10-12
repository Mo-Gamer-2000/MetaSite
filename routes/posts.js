const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Like = require("../models/Like"); 
const validateJWT = require("../middlewares/validateJWT");
const validatePostData = require("../middlewares/validatePostData");
const validateCommentData = require("../middlewares/validateComment");

// Fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new post
router.post("/", validateJWT, validatePostData, async (req, res) => {
  try {
    const { title, caption, image, content } = req.body;
    const newPost = new Post({
      title,
      caption,
      image,
      content,
      author: req.auth.id,
    });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add comment to a post
router.post(
  "/:postId/comments",
  validateJWT,
  validateCommentData,
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) return res.status(404).json({ error: "Post not found" });

      const newComment = new Comment({
        text: req.body.content,
        author: req.auth.id,
        post: req.params.postId,
      });
      await newComment.save(); // Save the new comment to the Comment collection

      post.comments.push(newComment._id); // Add the new comment's ID to the post's comments array
      await post.save();

      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Add Likes/Dislikes to a post
router.post("/:postId/likes", validateJWT, async (req, res) => {
  try {
    const { type } = req.body; // This should be either "LIKE" or "DISLIKE"
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Check for an existing like/dislike by this user on this post
    const existingLike = await Like.findOne({
      post: req.params.postId,
      user: req.auth.id,
    });
    if (existingLike) {
      await existingLike.remove();
    } else {
      const like = new Like({
        type: type,
        post: req.params.postId,
        user: req.auth.id,
      });
      await like.save();

      post.likes.push(like._id);
      await post.save();
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update comment in a post
router.put(
  "/:postId/comments/:commentId",
  validateJWT,
  validateCommentData,
  async (req, res) => {
    try {
      const { content } = req.body;
      const post = await Post.findById(req.params.postId);
      if (!post) return res.status(404).json({ error: "Post not found" });

      const comment = post.comments.id(req.params.commentId);
      if (!comment) return res.status(404).json({ error: "Comment not found" });

      // Ensure the user updaating the comment is the author
      if (comment.author.toString() !== req.auth.id) {
        return res
          .status(403)
          .json({ error: "Not authorised to update this comment" });
      }

      comment.content = content;

      await post.save();

      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Fetch individual post by ID
// Fetch individual post by ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("author", "username email") // Populates the post's author
      .populate({
        path: "comments", // Populates the post's comments
        populate: { path: "author", select: "username" }, // Within each comment, populates the comment's author
      })
      .populate({
        path: "likes", // Populates the likes on the post
        populate: { path: "user", select: "username" }, // Within each like, populates the user who made the like
      });

    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post); // This will now return a post with its author, comments (and authors of those comments), and likes (and users of those likes).
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update post
router.put("/:postId", validateJWT, validatePostData, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Ensure the user updating the post is the author
    if (post.author.toString() !== req.auth.id) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this post." });
    }

    const { title, caption, image, content } = req.body;

    // Modify the post
    if (title) post.title = title;
    if (caption) post.caption = caption;
    if (image) post.image = image;
    if (content) post.content = content;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete post
router.delete("/:postId", validateJWT, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Ensure the user deleting the post is the author
    if (post.author.toString() !== req.auth.id) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this post" });
    }

    await post.remove();
    res.json({ success: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
