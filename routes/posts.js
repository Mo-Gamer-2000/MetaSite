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

// Continue with other routes (Update, Delete, etc.)
module.exports = router;