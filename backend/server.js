const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "ZFLIX API is running"
  });
});
app.use("/api/movies", movieRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ZFLIX server running on port ${PORT}`);
});