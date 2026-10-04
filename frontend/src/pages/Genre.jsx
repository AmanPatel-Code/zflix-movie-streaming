import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";

function Genre() {

  const { genre } = useParams();

  const filteredMovies = movies.filter((movie) =>
    movie.genre.some(
      (item) =>
        item.toLowerCase() === genre.toLowerCase()
    )
  );

  return (
    <div className="page">

      <div className="page-header">

        <h1>
          {genre} Movies
        </h1>

        <p>
          Explore the best {genre} movies.
        </p>

      </div>

      <div className="movie-grid">

        {filteredMovies.length > 0 ? (

          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
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

export default Genre;