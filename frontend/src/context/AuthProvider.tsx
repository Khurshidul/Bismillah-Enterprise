import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../components/firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
interface PropTypes {
  children: React.ReactNode;
}
type themeContext = any;
export const AuthContext = createContext<themeContext>({});
export const auth = getAuth(app);

const AuthProvider: React.FC<PropTypes> = ({ children }) => {
  const [user, setUser] = useState<{} | null>(null);
  //Create a new user ...
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign in
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Sign in with Google
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  //Sign Out
  const logOut = () => {
    return signOut(auth);
  };

  // //Update profile ...
  // const updateUserProfile = (password: string) => {
  //   return updateProfile(auth.currentUser, {
  //     password: password,
  //   });
  // };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
