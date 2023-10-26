// Importing necessary packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Loading environment variables
const cors = require("cors"); // Cross-Origin Resource Sharing
const helmet = require("helmet"); // For setting HTTP headers for security
const rateLimit = require("express-rate-limit"); // For API request rate limiting

// Initializing express application
const app = express();

// Importing user-related routes
const userRoutes = require("./routes/users");

// Importing middleware to handle errors
const errorHandler = require("./middlewares/errorHandler");

// Setting up rate limiter to avoid abuse of the API
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Middlewares
app.use(express.json()); // Parsing incoming requests with JSON payloads
app.use(cors()); // Enabling CORS for all routes
app.use(helmet()); // Setting security headers
app.use(limiter); // Using the rate limiter
app.use(errorHandler); // Using the custom error handler

// Setting up routes
app.use("/api/users", userRoutes);
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(err));

// Defining the port number
const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
