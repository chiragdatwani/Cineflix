import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import User from "./components/User";

function App() {
  const [navShow, setnavShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setnavShow(false);
      } else setnavShow(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="App">
      <Header show={navShow} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <SearchResult />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
