const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Like = require("../models/Like");
const validateJWT = require("../middlewares/validateJWT");
const validatePostData = require("../middlewares/validatePostData");
const validateCommentData = require("../middlewares/validateComment");
const CustomError = require("../helpers/CustomError");

// Fetch all posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    if (!posts || posts.length === 0) {
      throw new CustomError("No posts found", 404);
    }
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// Create a new post
router.post("/", validateJWT, validatePostData, async (req, res, next) => {
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
    next(err);
  }
});

// Add comment to a post
router.post(
  "/:postId/comments",
  validateJWT,
  validateCommentData,
  async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) throw new CustomError("Post not found", 404);

      const newComment = new Comment({
        text: req.body.text,
        author: req.auth.id,
        post: req.params.postId,
        repliedTo: req.body.repliedTo,
      });
      await newComment.save();

      post.comments.push(newComment._id);
      await post.save();

      res.json(post);
    } catch (err) {
      next(err);
    }
  }
);

// Add Likes/Dislikes to a post
router.post("/:postId/likes", validateJWT, async (req, res, next) => {
  try {
    const { type } = req.body;

    const post = await Post.findById(req.params.postId);
    if (!post) throw new CustomError("Post not found", 404);

    const existingLike = await Like.findOne({
      post: req.params.postId,
      user: req.auth.id,
    });

    if (existingLike) {
      // If the user changes their like/dislike action
      if (existingLike.type !== type) {
        existingLike.type = type;
        await existingLike.save();
      } else {
        // If the user wants to undo their previous action
        await existingLike.remove();
        const index = post.likes.indexOf(existingLike._id);
        if (index > -1) {
          post.likes.splice(index, 1);
        }
      }
    } else {
      const like = new Like({
        type: type,
        post: req.params.postId,
        user: req.auth.id,
      });
      await like.save();
      post.likes.push(like);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// Update comment in a post
router.put(
  "/:postId/comments/:commentId",
  validateJWT,
  validateCommentData,
  async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) throw new CustomError("Post not found", 404);

      const comment = post.comments.id(req.params.commentId);
      if (!comment) throw new CustomError("Comment not found", 404);

      // Ensure the user updaating the comment is the author
      if (comment.author.toString() !== req.auth.id) {
        throw new CustomError("Not authorized to update this comment", 403);
      }

      const { content } = req.body;

      comment.content = content;

      await post.save();

      res.json(post);
    } catch (err) {
      next(err);
    }
  }
);

// Fetch individual post by ID
router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("author", "username email")
      .populate({
        path: "comments",
        populate: [
          { path: "author", select: "username" },
          {
            path: "repliedTo",
            populate: { path: "author", select: "username" },
          }, // Nested populate for replies
        ],
      })
      .populate({
        path: "likes",
        populate: { path: "user", select: "username" },
      });

    if (!post) throw new CustomError("Post not found", 404);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// Update post
router.put(
  "/:postId",
  validateJWT,
  validatePostData,
  async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) throw new CustomError("Post not found", 404);

      // Ensure the user updating the post is the author
      if (post.author.toString() !== req.auth.id) {
        throw new CustomError("Not authorized to update this post", 403);
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
      next(err);
    }
  }
);

// Delete post
router.delete("/:postId", validateJWT, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) throw new CustomError("Post not found", 404);

    // Ensure the user deleting the post is the author
    if (post.author.toString() !== req.auth.id) {
      throw new CustomError("Not authorized to delete this post", 403);
    }

    await post.remove();
    res.json({ success: "Post deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
