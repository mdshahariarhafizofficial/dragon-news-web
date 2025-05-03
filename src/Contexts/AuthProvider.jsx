import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { auth } from '../Firebase/firebase_init';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    
    // Create User with email & password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Current User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        } 
    }, []);

    // Login User
    const loginUser = (email, password) => {
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
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;