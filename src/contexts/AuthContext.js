import React from 'react';
import { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../helper/firebase';
import { useNavigate } from 'react-router';

//context context for autentication data
export const AuthContext =createContext()

//Function to get data from Auth context
export function useAuth(){
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
    const [user, setUser]= useState();
    const [isLoading, setIsLoading]=useState(true);
  
    

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, user=>{
            setUser(user)
            setIsLoading(false)
        });
        return unsubscribe;
     }, [])
     
     function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
      }
    
      function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
      }
    
      function logout() {
        auth.signOut();
      }
    
    const values={
        logout, signup, login, user
    }

    return (
        <AuthContext.Provider value={values}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;