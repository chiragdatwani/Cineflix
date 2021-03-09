import { combineReducers } from "redux";
import userReducer from "./userReducer";
import watchlistReducer from "./watchlistReducer";

export default combineReducers({
  currentUser: userReducer,
  watchlist: watchlistReducer,
});
