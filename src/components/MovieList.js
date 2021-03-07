import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
function MovieList() {
  return (
    <div className="movie-list">
      <h2>Trending Now</h2>
      <div className="movies">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieList;
