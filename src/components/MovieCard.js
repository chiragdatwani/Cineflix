import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard(props) {
  const refactorTitle = (title) => {
    if (title.length > 13) {
      return title.slice(0, 12) + "...";
    }
    return title;
  };
  return (
    <Link
      to={`/movie/${props.id}`}
      style={{ textDecoration: "none", color: "unset" }}
    >
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}
          alt={props.title}
        />
        <h3>{refactorTitle(props.title)}</h3>
      </div>
    </Link>
  );
}

export default MovieCard;
