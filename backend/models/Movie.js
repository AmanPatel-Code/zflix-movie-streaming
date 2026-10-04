const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    backdrop: {
      type: String,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    genres: {
      type: [String],
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    language: {
      type: String,
      default: "Hindi",
    },
  },

  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;