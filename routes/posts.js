const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const validateJWT = require("../middlewares/validateJWT");

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
router.post("/", validateJWT, async (req, res) => {
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

// Fetch individual post by ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "author",
      "username email"
    );
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update post
router.put("/:postId", validateJWT, async (req, res) => {
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
