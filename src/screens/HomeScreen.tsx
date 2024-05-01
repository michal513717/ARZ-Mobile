import React from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../utils/firebase";
import styles from "../utils/styles/styles";
import Header from "../components/Header";

const HomeScreen = () => {

  const handleSignOut = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <>
    <Header userEmail={FIREBASE_AUTH.currentUser?.email}/>
    <View>
      <View style={styles.containerContent}>

      </View>
      {/* <Text>Email: {FIREBASE_AUTH.currentUser?.email}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View> */}

    </View>
    </>
    
  );
};

export default HomeScreen;