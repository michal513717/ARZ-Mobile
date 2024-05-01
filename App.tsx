import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "./src/stores/authStore";
import MainStack from "./src/navigationStacks/mainStack";
import AuthStack from "./src/navigationStacks/authStack";
import { FIREBASE_AUTH } from "./src/utils/firebase";

export default function App() {
  const [isAuthorizated, setIsAuthorizated] = useState(false);
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    setIsAuthorizated(user === null ? false : true);
  }, [user]);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <GluestackUIProvider>
      <NavigationContainer>
        {
          isAuthorizated ? (
            <MainStack/>
          ) : (
            <AuthStack/>
          )
        }
      </NavigationContainer>
    </GluestackUIProvider>
  );
}