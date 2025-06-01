import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // User Registration
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Logout
  const logoutUser = () => {
    signOut(auth);
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const socialLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userinfo = {
    createNewUser,
    loginUser,
    logoutUser,
    user,
    socialLogin,
  };
  return <AuthContext value={userinfo}>{children}</AuthContext>;
};

export default AuthProvider;
