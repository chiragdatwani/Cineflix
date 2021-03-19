import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import Loader from './Loader'


function MovieCard(props) {
  const refactorTitle = (title) => {
    if (title.length > 13) {
      return title.slice(0, 12) + "...";
    }
    return title;
  };
  return (
    <div className="movie-card">
      <Link
        to={`/movie/${props.id}`}
        style={{ textDecoration: "none", color: "unset" }}
      >
        {props.imageUrl ?
          <img
          className="img-movie"
          src={`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}
          alt={props.title}
        />:
        <Loader/>}
        <h3>{refactorTitle(props.title)}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;
