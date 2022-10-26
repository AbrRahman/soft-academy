import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
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
    // log out 
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;