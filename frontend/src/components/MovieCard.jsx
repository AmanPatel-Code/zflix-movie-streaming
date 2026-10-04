import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card"
    >
      <img
        src={movie.image}
        alt={movie.title}
      />

      <div className="movie-overlay">

        <h3>{movie.title}</h3>

        <div className="movie-info">
          <span>⭐ {movie.rating}</span>
          <span>{movie.year}</span>
        </div>

        <p>{movie.genre.join(" • ")}</p>

      </div>
    </Link>
  );
}

export default MovieCard;