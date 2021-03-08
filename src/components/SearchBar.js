import React from "react";

import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

class SearchBar extends React.Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div className="search-bar">
        <ThemeProvider theme={darkTheme}>
          <form
            action="submit"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit(this.state.value);
            }}
          >
            <TextField
              autoComplete="off"
              id="filled-secondary"
              label="Search Movies"
              variant="outlined"
              value={this.state.value}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              color="secondary"
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
            />
          </form>
        </ThemeProvider>
      </div>
    );
  }
}

export default SearchBar;
