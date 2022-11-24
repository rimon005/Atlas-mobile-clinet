import React, { useEffect, useState } from 'react';
import { createContext } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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
    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })

        return () => {
            return unSubscribe()
        }
    } ,[])


    const authInfo = {
        user,
        loading,
        googleSignIn,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;