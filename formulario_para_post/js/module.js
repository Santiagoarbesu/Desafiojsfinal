import firebase from "firebase/app";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyDNH9hgWWpOQ-Ugvv2Ey5aXBvOhNtdOjG0",
    authDomain: "devto-project-cf4c2.firebaseapp.com",
    databaseURL: "https://devto-project-cf4c2-default-rtdb.firebaseio.com",
    projectId: "devto-project-cf4c2",
    storageBucket: "devto-project-cf4c2.appspot.com",
    messagingSenderId: "1052311079961",
    appId: "1:1052311079961:web:60d2213f4104cf9f392e88"
  };
firebase.initializeApp(firebaseConfig); 
console.log(firebase);
// Initialize Firebase
const db = firebase.firestore();
console.log(db);

export {firebase}