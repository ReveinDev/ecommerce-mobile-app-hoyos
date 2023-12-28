import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { Card } from "./Card";
import { colors } from "../global/colors";

export const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Juegos", { category })}
      style={styles.buttonStyle}
    >
      <Card style={{ alignItems: "center" }}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: colors.secondaryColor,
    borderWidth: 4,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontFamily: "ArchivoBlack-Regular",
    textTransform: "uppercase",
    fontSize: 20,
    color: colors.mainColor,
  },
});
