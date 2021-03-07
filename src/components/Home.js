import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
import MovieList from "./MovieList";
import { useHistory } from "react-router-dom";
import requests from "../api/requests";
function Home() {
  const history = useHistory();

  const handleSubmit = (value) => {
    history.push(`/search/${value}`);
  };

  return (
    <div className="page__container home">
      <h1>Millions of movies to discover. Explore Now.</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieList title="Trending Now" fetchUrl={requests.trending} trim />
      <MovieList title="Action Movies" fetchUrl={requests.action} trim />
      <MovieList title="Animation Movies" fetchUrl={requests.animation} trim />
      <MovieList title="Comedy Movies" fetchUrl={requests.comedy} trim />
      <MovieList title="Drama Movies" fetchUrl={requests.drama} trim />
      <MovieList title="Horror Movies" fetchUrl={requests.horror} trim />
      <MovieList title="Romance Movies" fetchUrl={requests.romance} trim />
      <MovieList title="Thriller Movies" fetchUrl={requests.thriller} trim />
    </div>
  );
}

export default Home;
