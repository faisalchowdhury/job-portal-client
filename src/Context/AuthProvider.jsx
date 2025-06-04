import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);

      const userEmail = { email: currentUser.email };

      if (userEmail) {
        axios
          .post("http://localhost:3000/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
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
    loading,
  };
  return <AuthContext value={userinfo}>{children}</AuthContext>;
};

export default AuthProvider;
