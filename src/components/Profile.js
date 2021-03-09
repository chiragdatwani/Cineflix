import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./Profile.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { auth } from "../firebase/firebaseUtils";
import { removeMovie } from "../actions/index";

function WatchList({ currentUser, watchList, removeMovie }) {
  const history = useHistory();

  return (
    <div className="page__container">
      {!currentUser ? (
        <h1>Sign in to see your WatchList</h1>
      ) : (
        <>
          <div className="profile">
            <div className="user-info">
              <div className="info-logout">
                <div className="info">
                  <div className="photo">
                    <Avatar
                      variant="square"
                      alt="user"
                      src={currentUser.photoURL}
                    />
                  </div>
                  <div className="text-info">
                    <h2 className="name">{currentUser.displayName}</h2>
                    <h3 className="date">
                      {`Member since: ${
                        currentUser.createdAt
                          ? currentUser.createdAt
                              .toDate()
                              .toString()
                              .slice(4, 16)
                          : "Loading..."
                      }`}
                    </h3>
                  </div>
                  <div className="logout">
                    <Button
                      onClick={() => {
                        auth.signOut();
                        history.replace("/");
                      }}
                      variant="outlined"
                      color="secondary"
                      className="delete-btn"
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </div>
              <div className="movie-count">
                <h2>{`You have ${watchList.length} movies in your WatchList`}</h2>
              </div>
            </div>
            <div className="watch-list">
              {!watchList
                ? "Loading..."
                : watchList.map((movie) => (
                    <div key={movie.id} className="list-item">
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          className="movie-poster"
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt="poster"
                        />
                      </Link>
                      <div className="movie-info">
                        <Link
                          to={`/movie/${movie.id}`}
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          <p className="movie-title">{movie.title}</p>
                        </Link>
                        <p className="movie-rating">{`User Rating: ${movie.vote_average}`}</p>
                      </div>
                      <div className="delete">
                        <DeleteIcon
                          color="secondary"
                          className="delete-icon"
                          fontSize="large"
                          onClick={() => removeMovie(movie, currentUser.uid)}
                        />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    watchList: state.watchlist,
  };
};
export default connect(mapStateToProps, { removeMovie })(WatchList);
