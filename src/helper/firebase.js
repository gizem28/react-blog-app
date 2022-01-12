// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {onAuthStateChanged, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuAZ41ML__gaoRf2BukX0tt-TgPTuxNG4",
  authDomain: "social-blog-828e9.firebaseapp.com",
  databaseURL: "https://social-blog-828e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "social-blog-828e9",
  storageBucket: "social-blog-828e9.appspot.com",
  messagingSenderId: "77836786990",
  appId: "1:77836786990:web:e0bf0da697073b99ec6ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

//Detect auth state
onAuthStateChanged(auth, user=>{
 user? (console.log("logged in", user))
 :(console.log("no user")) ;
})

//init services
const db = getFirestore()

//collection ref
const colRef= collection(db, "blogs")

//get collection data
getDocs(colRef)
.then((snapshot)=>{
  let blogs=[]
  snapshot.docs.forEach((doc)=>{
    blogs.push({...doc.data(), id:doc.id})
  })
  console.log(blogs);
})
.catch(err=>{
  console.log(err.message);
})

