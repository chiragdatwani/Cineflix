import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
import MovieList from "./MovieList";
import requests from "../api/requests";
function Home() {
  return (
    <div className="page__container home">
      <h1>Millions of movies to discover. Explore Now</h1>
      <SearchBar />
      <MovieList title="Trending Now" fetchUrl={requests.trending} />
      <MovieList title="Action Movies" fetchUrl={requests.action} />
      <MovieList title="Animation Movies" fetchUrl={requests.animation} />
      <MovieList title="Comedy Movies" fetchUrl={requests.comedy} />
      <MovieList title="Drama Movies" fetchUrl={requests.drama} />
      <MovieList title="Horror Movies" fetchUrl={requests.horror} />
      <MovieList title="Romance Movies" fetchUrl={requests.romance} />
      <MovieList title="Thriller Movies" fetchUrl={requests.thriller} />
    </div>
  );
}

export default Home;
