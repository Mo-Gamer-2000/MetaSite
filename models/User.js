const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  ID: { type: String },
  preferences: {
    colorScheme: { type: String },
    menuItems: [{ type: String }],
  },
});

module.exports = mongoose.model("User", UserSchema);
