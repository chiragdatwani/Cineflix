import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
import MovieList from "./MovieList";

function Home() {
  return (
    <div className="page__container home">
      <h1>Millions of movies to discover. Explore Now</h1>
      <SearchBar />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
}

export default Home;
