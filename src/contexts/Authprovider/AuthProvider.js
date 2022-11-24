import React, { useState } from 'react';
import { createContext } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup(auth ,googleProvider)
    }




    const authInfo = {
        user,
        loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;