const Movie = require("../models/Movie");

// ==========================================
// Get all movies
// GET /api/movies
// ==========================================
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: movies.length,
      movies: movies,
    });
  } catch (error) {
    console.error("Get movies error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
};


// ==========================================
// Get single movie
// GET /api/movies/:id
// ==========================================
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      movie: movie,
    });
  } catch (error) {
    console.error("Get movie error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movie",
    });
  }
};


// ==========================================
// Create new movie
// POST /api/movies
// ==========================================
const createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      thumbnail,
      backdrop,
      videoUrl,
      year,
      duration,
      genres,
      rating,
      language,
    } = req.body;

    const movie = await Movie.create({
      title,
      description,
      thumbnail,
      backdrop,
      videoUrl,
      year,
      duration,
      genres,
      rating,
      language,
    });

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      movie: movie,
    });
  } catch (error) {
    console.error("Create movie error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create movie",
    });
  }
};


// ==========================================
// Export controllers
// ==========================================
module.exports = {
  getMovies,
  getMovieById,
  createMovie,
};