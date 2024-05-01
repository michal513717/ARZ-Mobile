import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import styles from "../utils/styles/styles";

const HomeScreen = () => {

  const handleSignOut = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Email: {FIREBASE_AUTH.currentUser?.email}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HomeScreen;