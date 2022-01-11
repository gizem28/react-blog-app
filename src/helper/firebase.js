// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
// import {collection, getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuAZ41ML__gaoRf2BukX0tt-TgPTuxNG4",
  authDomain: "social-blog-828e9.firebaseapp.com",
  projectId: "social-blog-828e9",
  storageBucket: "social-blog-828e9.appspot.com",
  messagingSenderId: "77836786990",
  appId: "1:77836786990:web:499bdabf6eb88b4bec6ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
// const db =getFirestore (app);
// const blogs =collection(db, "blog")

//Detect auth state
onAuthStateChanged(auth, user=>{
 user? (console.log("logged in", user))
 :(console.log("no user")) ;
})