import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCbnqJOfgk-us5DfS6uSUmWAvOwMXYPoDM",
  authDomain: "chattyapp-adbe4.firebaseapp.com",
  databaseURL: "https://chattyapp-adbe4-default-rtdb.firebaseio.com",
  projectId: "chattyapp-adbe4",
  storageBucket: "chattyapp-adbe4.appspot.com",
  messagingSenderId: "210007060394",
  appId: "1:210007060394:web:79808514c4b3de404605d3"
};

firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();