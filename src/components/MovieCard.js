import React from "react";
import "./MovieCard.css";
function MovieCard(props) {
  const refactorTitle = (title) => {
    if (title.length > 17) {
      return title.slice(0, 18) + "...";
    }
    return title;
  };
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}
        alt={props.title}
      />
      <h3>{refactorTitle(props.title)}</h3>
    </div>
  );
}

export default MovieCard;
