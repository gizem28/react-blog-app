// Import the functions you need from the SDKs you need
// import { useEffect, useState } from "react";
import { initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPolMo-OvXnDOS7J0peLcGdHmGvGjRmkQ",
  authDomain: "social-blog2.firebaseapp.com",
  databaseURL: "https://social-blog2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "social-blog2",
  storageBucket: "social-blog2.appspot.com",
  messagingSenderId: "310658077183",
  appId: "1:310658077183:web:30833f895c5848587497ca"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db =getDatabase();


//Detect auth state
export const auth= getAuth(firebase);
onAuthStateChanged(auth, user=>{
 user? (console.log("logged in", user))
 :(console.log("no user")) ;
})