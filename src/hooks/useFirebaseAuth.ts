import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FIREBASE_AUTH } from "../utils/firebase/index";
import { useState } from "react";

const useFirebaseAuth = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        } catch (error) {
            alert("Sign in failed: " + error.message);
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

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(FIREBASE_AUTH, provider);
        } catch (error) {
            alert("Google sign in failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        signIn,
        signUp,
        signInWithGoogle,
    };
};

export default useFirebaseAuth;