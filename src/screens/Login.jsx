import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { InputForm } from "../components/Input";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/shop/authSlice";
import { insertSession } from "../db";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [triggerSignIn, result] = useSignInMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignIn({ email, password });
  };

  useEffect(() => {
    if (result.data) {
      console.log(result.data);
      dispatch(setUser(result.data));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken,
      })
        .then((result) => console.log("Exito al guardar sesion: ", result))
        .catch((error) => console.log("Error al guardar sesion: ",error.message));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <InputForm label="Email:" onChange={setEmail} error="" />
      <InputForm
        label="Password:"
        onChange={setPassword}
        error=""
        isSecure={true}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.subtitleLink}>Registrate</Text>
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
