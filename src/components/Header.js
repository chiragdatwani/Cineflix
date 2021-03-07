import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import React from "react";

function Header(props) {
  return (
    <AppBar className={`nav ${!props.show ? "hide" : ""}`} color="secondary">
      <Toolbar className="nav__container">
        <Typography variant="h5">MovieDB</Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
