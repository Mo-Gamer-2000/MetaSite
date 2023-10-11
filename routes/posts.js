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

module.exports = router;
