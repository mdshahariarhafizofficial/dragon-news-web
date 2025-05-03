import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/firebase_init';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        } 
    }, [])

    const userInfo = {
        createUser,
        user,
        setUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;