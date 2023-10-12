const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const userRoutes = require("./routes/users");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

// Routes
app.use("/api/users", userRoutes);
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
