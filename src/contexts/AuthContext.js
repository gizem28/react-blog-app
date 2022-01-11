import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../helper/firebase';

export const AuthContext =createContext()

const AuthContextProvider = (props) => {
    const [user, setUser]= useState()

    useEffect(() => {
        onAuthStateChanged(auth, user=>{
            setUser(user)
        })
     }, [])
      
    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;