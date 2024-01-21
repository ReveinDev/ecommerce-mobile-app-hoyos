import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

export const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState();

  const onHandleChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        value={input}
        secureTextEntry={isSecure}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    width: "70%",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: 10,
    width: "90%",
    backgroundColor: colors.mainDark,
    color: colors.mainLight,
    padding: 8,
  },
  label: {
    fontFamily: "Rubik-Regular",
    color: colors.secondaryColor,
    paddingLeft: 5,
    marginBottom: 4,
  },
});
