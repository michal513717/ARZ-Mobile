import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#0782F9",
  white: "#FFFFFF",
  black: "#000000",
  lightGray: "#e7e5e4"
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerContent:{
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.lightGray,
    flex: 0,
    alignItems: 'center',
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    marginTop: 5,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutlineText: {
    color: COLORS.primary,
  },
  mainMain: {
    width: "100%",
    padding: 10,
    alignItems: "center"
  }
});

export default styles;