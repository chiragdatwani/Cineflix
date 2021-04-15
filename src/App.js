import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Profile from "./components/Profile";
import MovieInfo from "./components/MovieInfo";
import Footer from "./components/Footer";
import { signIn, fetchMovies } from "./actions/index";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

function App(props) {
  const [navShow, setnavShow] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        createUserProfileDocument(user);
        props.fetchMovies(user.uid);
      }
      props.signIn(user);
      props.fetchMovies(null);
    });
  }, [props]);

  useEffect(() => {
    const navFade = () => {
      if (window.scrollY > 60) {
        setnavShow(false);
      } else setnavShow(true);
    };
    window.addEventListener("scroll", navFade);
    return () => {
      window.removeEventListener("scroll", navFade);
    };
  }, []);
  

  return (
    <div className="App">
      <div className="flex-wrapper">
        <Header show={navShow} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search/:query">
            <SearchResult />
          </Route>
          <Route path="/movie/:id">
            <MovieInfo />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default connect(null, { signIn, fetchMovies })(App);
