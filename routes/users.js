const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  // Check if user exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }

  // Create a new user
  user = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 8), // Hashing password
    firstName,
    lastName,
  });

  await user.save();
  res.json({ msg: "User registered successfully" });
});

// User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  // Create JWT token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token, user });
});

// Add other routes  as needed
module.exports = router;
