import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/movies"
        );

        setMovies(response.data.movies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);

        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="empty-page">
        <h2>Loading movies...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="empty-page">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="page">

      <div className="page-header">
        <h1>Movies</h1>
        <p>Explore our movie collection</p>
      </div>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
            />
          ))
        ) : (
          <div className="empty-page">
            <h2>No movies found</h2>
          </div>
        )}
      </div>

    </div>
  );
}

export default Movies;