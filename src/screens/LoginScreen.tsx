import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { useNavigation } from "@react-navigation/native";
import styles, { COLORS } from "../utils/styles/styles";

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signIn,
    signUp
  } = useFirebaseAuth();

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
      <View style={styles.inputContainer}>

        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />

      </View>

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={signUp}>
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>Create account</Text>
          </TouchableOpacity>

        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;