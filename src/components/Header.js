import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "../firebase/firebaseUtils";
import { signIn } from "../actions/index";

function Header(props) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      createUserProfileDocument(user);
      props.signIn(user);
    });

    return () => {
      unsubscribeFromAuth = null;
    };
  }, []);

  return (
    <AppBar className={`nav ${!props.show ? "hide" : ""}`} color="secondary">
      <Toolbar className="nav__container">
        <Typography variant="h5">
          <Link style={{ textDecoration: "none", color: "unset" }} to="/">
            MovieDB
          </Link>
        </Typography>

        {props.currentUser ? (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "unset" }}
          >
            My WatchList
          </Link>
        ) : (
          <Button onClick={signInWithGoogle} variant="outlined">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { signIn })(Header);
