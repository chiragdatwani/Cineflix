import React, {useState, useEffect} from "react";
import axios from 'axios';
import './SearchBar.css';
import {Link} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, styled } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Divider, InputAdornment, List, ListItem, ListItemText } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import requests from "../api/requests";


const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const MyList = styled(List)({
  marginTop: '5px',
  backgroundColor: '#1e2125',
  color: '#ffffff'
})

const SearchBar = (props) => {

  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      if(value.length < 3){
        setMovies([]);
      }else{
        const {data} = await axios.get(requests.searchMovie(value));
        setMovies(data.results.slice(0,5))
      }
    }

    let timeoutId = setTimeout(()=>{
      if(value){
        fetchData();
        }
    }, 300)

    return () => {
      if(value.length < 3){
        setMovies([])
      }
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line 
  },[value])
 
  return (
      <div className="search-bar">
        <ThemeProvider theme={darkTheme}>
          <form
            action="submit"
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit(value);
            }}
          >
            <TextField
              autoComplete="off"
              id="filled-secondary"
              label="Search Movies"
              variant="outlined"
              value={value}
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
                setValue(e.target.value );
              }}
            />
          </form>
        </ThemeProvider>
        {
        !movies.length > 0?
        <div></div>:
        <div className="search-list">
          <MyList component="nav"  aria-label="mailbox folders">
            {movies.map((movie) => (
              <div style={props} key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  <ListItem button>
                  <ListItemText primary={`${movie.title} ${movie.release_date ? '(' + movie.release_date.split("-")[0] + ')': ''}`} />
                  </ListItem>
                  <Divider light/>
                </Link>
              </div>
            ))}
          </MyList>
        </div>
      }
      </div>
      
    );
  
}

export default SearchBar;
