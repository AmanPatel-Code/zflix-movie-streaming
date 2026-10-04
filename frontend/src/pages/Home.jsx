import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div className="page">

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            ZFLIX ORIGINAL
          </p>

          <h1>Shadow Protocol</h1>

          <p className="hero-description">
            An elite agent gets caught in a dangerous
            international conspiracy.
          </p>

          <div className="hero-buttons">
            <button>▶ Play Now</button>

            <button className="secondary-btn">
              + My List
            </button>
          </div>

        </div>

      </section>

      {/* Trending */}
      <section className="movie-section">

        <h2>Trending Now</h2>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;