import _ from "lodash";
const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;

    case "ADD_MOVIE":
      return [...state, action.payload];

    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload.id);

    default:
      return state;
  }
};

export default watchlistReducer;
