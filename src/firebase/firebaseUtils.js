import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlm_EX0XvRb9u9bRWYTECFQ45peS8ImZg",
  authDomain: "cineflix-cd.firebaseapp.com",
  projectId: "cineflix-cd",
  storageBucket: "cineflix-cd.appspot.com",
  messagingSenderId: "173385146274",
  appId: "1:173385146274:web:5fb96bf43b3cbc24dd1cfb",
  measurementId: "G-J8KLDJK44X",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        watchlist: [],
      });
    } catch (error) {
      console.log("error.message");
    }
  }
  return userRef;
};
export const db = firebase.firestore();
export default firebase;
