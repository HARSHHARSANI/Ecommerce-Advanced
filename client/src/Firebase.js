// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFfCRAB6GcoOCWvtlWjtIkOPE4KPlVOUs",
  authDomain: "ecommerce-6de3f.firebaseapp.com",
  projectId: "ecommerce-6de3f",
  storageBucket: "ecommerce-6de3f.appspot.com",
  messagingSenderId: "900164143358",
  appId: "1:900164143358:web:4b5f466c329ecc79903daf",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

///import firebase from "firebase/compat/app";
