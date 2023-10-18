const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateJWT = require("../middlewares/validateJWT");
const validateUserRegistration = require("../middlewares/validateUserRegistration");
const CustomError = require("../helpers/CustomError");

const router = express.Router();

// User Registration
router.post("/register", validateUserRegistration, async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      throw new CustomError("User already exists", 400);
    }

    // Create a new user
    user = new User({
      username,
      email,
      password: await bcrypt.hash(password, 8),
      firstName,
      lastName,
    });

    await user.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    next(err);
  }
});

// User login
router.post("/login", async (req, res, next) => {
  try {
    const { identifier, password } = req.body;

    const condition = identifier.includes("@")
      ? { email: identifier }
      : { username: identifier };

    const user = await User.findOne(condition);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new CustomError("Invalid credentials", 400);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    res.json({ token, user });
  } catch (err) {
    next(err);
  }
});

// Update User Information
router.put("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ID } = req.body;

    let user = await User.findById(id);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    user.ID = ID;
    await user.save();
    res.json({ msg: "User information updated successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
