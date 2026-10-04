const express = require("express");

const {
  getMovies,
  getMovieById,
  createMovie,
} = require("../controllers/movieController");

const router = express.Router();

// GET all movies
router.get("/", getMovies);

// GET single movie
router.get("/:id", getMovieById);

// CREATE new movie
router.post("/", createMovie);

module.exports = router;