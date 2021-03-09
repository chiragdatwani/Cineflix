import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { signInWithGoogle } from "../firebase/firebaseUtils";
import { signIn } from "../actions/index";

function Header(props) {
  return (
    <AppBar className={`nav ${!props.show ? "hide" : ""}`} color="secondary">
      <Toolbar className="nav__container">
        {/* <Typography variant="h5"> */}
        <Link style={{ textDecoration: "none", color: "unset" }} to="/">
          <h2 className="logo">CineFlix</h2>
        </Link>
        {/* </Typography> */}

        {props.currentUser ? (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <h4> My WatchList</h4>
          </Link>
        ) : (
          <Button onClick={signInWithGoogle} color="inherit" variant="outlined">
            Sign In
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
