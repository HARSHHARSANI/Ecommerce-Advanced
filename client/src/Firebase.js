// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPcuCSMp_7ABDhl-Mu1MB6ihwbDoCbbDE",
  authDomain: "ecommerce-e311b.firebaseapp.com",
  databaseURL: "https://xxxxxxxxxxx.firebaseio.com",
  projectId: "ecommerce-e311b",
  storageBucket: "ecommerce-e311b.appspot.com",
  messagingSenderId: "754642618352",
  appId: "1:754642618352:web:6db430fafe8d5c331b3f35",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

///import firebase from "firebase/compat/app";
