import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
  return (
    <AppBar className={`nav ${!props.show ? "hide" : ""}`} color="secondary">
      <Toolbar className="nav__container">
        <Typography variant="h5">
          <Link style={{ textDecoration: "none", color: "unset" }} to="/">
            MovieDB
          </Link>
        </Typography>

        <Button variant="outlined">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
