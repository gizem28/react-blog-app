import { initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getDatabase} from "firebase/database"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
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

// getIdToken ( forceRefresh ? :  boolean ) : Promise < string >