import React from "react";
import "./MovieCard.css";
function MovieCard() {
  return (
    <div className="movie-card">
      <img
        src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
        alt=""
        srcset=""
      />
      <h3>Wonder Woman 1982</h3>
    </div>
  );
}

export default MovieCard;
