import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

function Watch() {

  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="empty-page">
        Movie not found
      </div>
    );
  }

  return (
    <div className="watch-page">

      <h1>{movie.title}</h1>

      <div className="video-container">

        <video
          controls
          poster={movie.image}
          width="100%"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />

          Your browser does not support video.
        </video>

      </div>

    </div>
  );
}

export default Watch;