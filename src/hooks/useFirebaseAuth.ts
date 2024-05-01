import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../utils/firebase";
import { useState } from "react";
import { useAuthStore } from "../stores/authStore";

const useFirebaseAuth = () => {
  const { email, setEmail, setUser, user } = useAuthStore();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
      alert("Sign in failed: " + error.message);

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert("Check your email!");
    } catch (error) {
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn,
    signUp
  };
};

export default useFirebaseAuth;