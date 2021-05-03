import React from "react";
import { Link } from "react-router-dom";
import {useSpring, animated, config} from 'react-spring';
import "./MovieCard.css";
import Loader from './Loader'


function MovieCard(props) {

  //Animations
  const springProps = useSpring({opacity: 1, from: {opacity: 0}, config: config.molasses});
  
  return (
    <animated.div style={springProps} className="movie-card">
      <Link
        to={`/movie/${props.id}`}
        style={{ textDecoration: "none", color: "unset" }}
      >
        <div className="img-container">
          {props.imageUrl ?
            <img
            className="img-movie"
            src={`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}
            alt={props.title}
          />:
          <Loader/>}
        </div>
        <h3>{props.title}</h3>
      </Link>
    </animated.div>
  );
}

export default MovieCard;
