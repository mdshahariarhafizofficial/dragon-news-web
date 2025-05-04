import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { auth } from '../Firebase/firebase_init';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // console.log(user, loader);
    
    // Create User with email & password
    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sing in with Gmail
    const singInWithGmail = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
            toast.success('Sing is Successful')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }


    // Current User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe();
        } 
    }, []);

    // Login User
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out
    const logOut = () => {
        return signOut(auth)
    }


    // Context Data
    const userInfo = {
        createUser,
        user,
        setUser,
        loginUser,
        logOut,
        loader, 
        setLoader,
        singInWithGmail,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;