import { db } from "../firebase/firebaseUtils";

export const signIn = (user) => {
  return async (dispatch) => {
    if (!user) {
      return dispatch({ type: "SET_CURRENT_USER", payload: null });
    }

    const userRef = db.collection("users").doc(user.uid);

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return dispatch({
            type: "SET_CURRENT_USER",
            payload: { ...user, createdAt: doc.data().createdAt },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const addMovie = (movie, user) => {
  return async (dispatch, getState) => {
    const userRef = db.collection("users").doc(user);

    userRef.update({
      watchlist: [...getState().watchlist, movie],
    });

    dispatch({ type: "ADD_MOVIE", payload: movie });
  };
};

export const removeMovie = (movie, user) => {
  return async (dispatch, getState) => {
    const userRef = db.collection("users").doc(user);

    userRef.update({
      watchlist: getState().watchlist.filter((m) => m.id !== movie.id),
    });

    dispatch({ type: "REMOVE_MOVIE", payload: movie });
  };
};

export const fetchMovies = (user) => {
  return async (dispatch) => {
    if (!user) {
      return dispatch({ type: "FETCH_MOVIES", payload: [] });
    }
    const userRef = db.collection("users").doc(user);

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return dispatch({
            type: "FETCH_MOVIES",
            payload: doc.data().watchlist,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
