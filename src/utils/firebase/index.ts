import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//@ts-ignore
import { firebaseConfig } from "./src/config/FirebaseConfig";

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);