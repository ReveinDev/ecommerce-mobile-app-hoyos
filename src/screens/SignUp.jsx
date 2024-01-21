import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { InputForm } from "../components/Input";
import { useSignUpMutation } from "../services/authService";
import { signUpSchema } from "../validations/signUpSchema";
import { useDispatch } from "react-redux";
import { setUser } from "../features/shop/authSlice";

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");

  const [triggerSignUp, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      const validation = signUpSchema.validateSync({ email, password, repeatPassword })
      triggerSignUp({ email, password });
    } catch (error) {
      console.log("Error al registrar usuario")
      console.log("Ruta: ", error.path)
      switch (error.path) {
        case "email":
          setErrorEmail(error.errors)
          break;
        case "password":
          setErrorPassword(error.errors)
          break;
        case "repeatPassword":
          setErrorRepeatPassword(error.errors)
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result])

  return (
    <View style={styles.container}>
      <InputForm label="Email:" onChange={setEmail} error={errorEmail} />
      <InputForm
        label="Password:"
        onChange={setPassword}
        error={errorPassword}
        isSecure={true}
      />
      <InputForm
        label="Repeat Password:"
        onChange={setRepeatPassword}
        error={errorRepeatPassword}
        isSecure={true}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.subtitleLink}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainDark,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.secondaryColor,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: colors.mainDark,
    fontFamily: "Rubik-Regular",
  },
  altContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  subtitle: {
    color: colors.secondaryColor,
    fontFamily: "Teko-Regular",
    fontSize: 20,
  },
  subtitleLink: {
    fontFamily: "ArchivoBlack-Regular",
    color: colors.mainColor,
    fontSize: 11,
    textDecorationLine: "underline",
  },
});
