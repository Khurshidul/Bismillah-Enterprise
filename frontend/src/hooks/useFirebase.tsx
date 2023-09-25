import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState<{}>({});
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        console.log(user.displayName);
      })
      .catch(error => {
        console.log(error);
      });
    console.log("Google Sign in");
  };
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
  }, []);
  // return [user, setUser];

  return { user, signInWithGoogle, handleSingOut };
};
export default useFirebase;
