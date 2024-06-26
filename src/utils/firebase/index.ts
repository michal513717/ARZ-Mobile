import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../configs/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FIREBASE_APP = initializeApp(firebaseConfig);

const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
