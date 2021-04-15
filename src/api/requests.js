const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=28`,
  animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=16`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=35`,
  documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=99`,
  drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=18`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=27`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10749`,
  thriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=53`,
  images: "https://image.tmdb.org/t/p/w500/",
  getMovie: (id) => {return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`},
  getYoutube: (id) => {return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`},
  searchMovie: (query) => {return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`}

};

export default requests;
