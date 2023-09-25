const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// User Registration
router.post("/register", async (req, res, next) => {
  try {
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
      password: await bcrypt.hash(password, 8), // Hashing password
      firstName,
      lastName,
    });

    await user.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    next(err); // Passes the error to the global error handler
  }
});

// User login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, user });
  } catch (err) {
    next(err); // Passes the error to the global error handler
  }
});

// Update User Information
router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ID } = req.params;

    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.ID = ID;

    await user.save();

    res.json({ msg: "User information updated successfully" });
  } catch (err) {
    next(err); //Passes the error to the global error handler
  }
});

// Add other routes  as needed
module.exports = router;
