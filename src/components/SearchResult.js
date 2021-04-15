import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./SearchResult.css";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import requests from '../api/requests'

function SearchResult() {
  const { query } = useParams();

  const [searchQuery, setSearchQuery] = useState(query);

  const history = useHistory();

  const handleSubmit = (value) => {
    history.replace(`/search/${value}`);
    setSearchQuery(value);
  };

  return (
    <div className="page__container search">
      <div className="search">
        <SearchBar handleSubmit={handleSubmit} />
      </div>

      <MovieList
        title={`Search results for: ${searchQuery}`}
        fetchUrl={requests.searchMovie(searchQuery)}
      />
    </div>
  );
}

export default SearchResult;
