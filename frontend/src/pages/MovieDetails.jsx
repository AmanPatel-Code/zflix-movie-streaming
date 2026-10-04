import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {

  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="empty-page">
        <h1>Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="movie-details">

      <img
        className="details-image"
        src={movie.image}
        alt={movie.title}
      />

      <div className="details-content">

        <p className="hero-label">
          ZFLIX MOVIE
        </p>

        <h1>{movie.title}</h1>

        <div className="details-meta">

          <span>⭐ {movie.rating}</span>

          <span>{movie.year}</span>

          <span>{movie.duration}</span>

          <span>
            {movie.genre.join(" • ")}
          </span>

        </div>

        <p>
          {movie.description}
        </p>

        <Link
          to={`/watch/${movie.id}`}
          className="watch-button"
        >
          ▶ Watch Now
        </Link>

      </div>

    </div>
  );
}

export default MovieDetails;