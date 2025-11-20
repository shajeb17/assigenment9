import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseconfig';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({childern}) => {
    let [userInfo,setUserInfo]=useState()
    let [loading,setLodaing]=useState(true)

    let handleSinin=({email,password})=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    let handleRegister=({email,password})=>{
        return createUserWithEmailAndPassword(email,password)
    }
    let handleSignout=()=>{
        return signOut()
    }
    let handleSigninGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    
    useEffect(()=>{
        let unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUserInfo(currentUser)
            setLodaing(false)
        })
        return ()=>{
            unsubscribe()
        }
    })
    let allProvider={
        handleSinin,
        handleRegister,
        handleSignout,
        handleSigninGoogle,
        userInfo,
        loading
    }
    return (
    <AuthContext.Provider value={allProvider}>
         {childern}
    </AuthContext.Provider>
    );
};

export default AuthProvider;