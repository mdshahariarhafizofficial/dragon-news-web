import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const email = "dadu@Email.com";

    const userInfo = {
        email,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;