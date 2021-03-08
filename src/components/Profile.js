import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { auth } from "../firebase/firebaseUtils";

function WatchList(props) {
  return (
    <div className="page__container">
      {!props.currentUser ? (
        <h1>Sign in to see your WatchList</h1>
      ) : (
        <>
          <div className="user-info">
            <h2>{props.currentUser.displayName}</h2>
            <img
              src={props.currentUser.photoURL}
              width="200px"
              alt="user-photo"
            />
          </div>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => auth.signOut()}
          >
            SignOut
          </Button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps)(WatchList);
