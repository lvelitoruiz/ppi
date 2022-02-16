import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDY6e4SRAIOpMxLr7_GMJwNVAbjWOz9yWg",
  authDomain: "ppi-app-e73b6.firebaseapp.com",
  projectId: "ppi-app-e73b6",
  storageBucket: "ppi-app-e73b6.appspot.com",
  messagingSenderId: "426090647268",
  appId: "1:426090647268:web:70dd95b9b3e9b5230b66f1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}