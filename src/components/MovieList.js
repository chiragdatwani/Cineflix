import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import axios from "axios";

function MovieList(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(props.fetchUrl);
      setMovies(() => {
        if (props.trim) {
          return response.data.results.slice(0, 8);
        }
        return response.data.results;
      });
    }

    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="movie-list">
      <h2>{props.title}</h2>

      <div className="movies">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
