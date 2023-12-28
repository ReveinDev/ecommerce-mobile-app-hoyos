import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

export const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.mainDark,
    shadowOffset: {
      height: 5,
      width: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 1,
    paddingVertical: 20,
    paddingLeft: 5,
    backgroundColor: colors.mainLight,
  },
});
