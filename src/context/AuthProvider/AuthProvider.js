import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [lightMode, setLightNode] = useState(true)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }
    // sign in github
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider)
    }
    // sign up with email and password
    const registerEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // const handel log in with email and password
    const logInWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (userProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userProfile)
    }
    // log out 
    const logOut = () => {
        return signOut(auth)
    }
    // getting current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])
    //   handle dark night mode
    const handleDarkNightMode = (variant) => {
        setLightNode(variant)
    }
    const authInfo = {
        signInWithGoogle,
        signInWithGithub,
        registerEmailAndPassword,
        logInWithEmailAndPassword,
        updateUserProfile,
        logOut,
        loading,
        lightMode,
        handleDarkNightMode,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;