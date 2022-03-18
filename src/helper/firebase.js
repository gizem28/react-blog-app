import { initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD4sdzFfmtLKc968GPhdqX0Ai6HXSvJ6Q",
  authDomain: "social-blog-3.firebaseapp.com",
  projectId: "social-blog-3",
  storageBucket: "social-blog-3.appspot.com",
  messagingSenderId: "609895196180",
  appId: "1:609895196180:web:9109ea355296aca9006901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db =getDatabase();


//Detect auth state
export const auth= getAuth(firebase);
onAuthStateChanged(auth, user=>{
 user? (console.log("logged in", user))
 :(console.log("no user")) ;
})
