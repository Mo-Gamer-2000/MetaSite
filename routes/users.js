const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const Joi = require("joi");

const registrationValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  });

  return schema.validate(data);
};

// User Registration
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const { error } = registrationValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

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

// Update User Preferences
router.put("/update/preferences/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { colorScheme, menuItems } = req.body;

    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.preferences.colorScheme = colorScheme;
    user.preferences.menuItems = menuItems;

    await user.save();

    res.json({ msg: "User preferences updated successfully" });
  } catch (err) {
    next(err);
  }
});

// Dynamic Navigation Menu
const MENU_ITEMS = ["Dashboard", "Profile", "Settings", "Logout"];

// Fetch available menu items
router.get("/menu-items", (req, res) => {
  res.json(MENU_ITEMS);
});

// Toggle menu items based on user preferences - this would tie into the update preferences route.


// Add other routes  as needed
module.exports = router;
