import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    // const user = {
    //     displayName: "AB rahman"
    // }
    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    // sign in github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider)
    }
    // sign up with email and password
    const registerEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // const handel log in with email and password
    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (userName, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photoUrl
        })
    }
    // getting current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe();
    }, [])
    // log out 
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        signInWithGoogle,
        signInWithGithub,
        registerEmailAndPassword,
        logInWithEmailAndPassword,
        updateUserProfile,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;