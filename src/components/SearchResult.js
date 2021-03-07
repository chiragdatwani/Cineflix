import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
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
      <SearchBar handleSubmit={handleSubmit} />
      <MovieList
        title={`Search results for: ${searchQuery}`}
        fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=a1c8048951164cc08dff8c1ea6d7fcfc&query=${searchQuery}`}
      />
    </div>
  );
}

export default SearchResult;
