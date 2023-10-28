import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [cartLoad, setCartLoad] = useState(true);

  // const [cart, setCart] = useState(0);
  const [cartData, setCartData] = useState([]);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // const cartUrl = `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart/${user?.uid}`;

  const fetchData = async () => {
    try {
      await fetch(
        `https://b8a10-brandshop-server-side-ashiqee-dkn146col-ashiqee.vercel.app/cart/${user?.uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCartData(data);
        });
    } catch (error) {
      console.error("Can not fetch data", error);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      fetchData();
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    loading,
    logIn,
    logOut,
    googleLogin,
    cartData,

    fetchData,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
