import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "./Card";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";

export const CartItem = ({ item }) => {
  return (
    <Card style={styles.cartItemContainer}>
      <Image style={styles.imageCartItem} source={{ uri: item.portada }} />
      <View>
        <Text style={styles.cartTitle}>{item.nombre}</Text>
        <Text style={styles.cartCategory}>{item.genero}</Text>
        <Text style={styles.cartPrice}>
          $ {item.precio.toLocaleString("de-DE")}
        </Text>
        <Text style={styles.cartPrice}>
          Cantidad: {item.quantity} / Total: $ {item.quantity * item.precio}
        </Text>
      </View>
      <Pressable style={styles.trashCart} onPress={null}>
        <Ionicons name="trash-bin" size={24} color={colors.mainDark} />
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  imageCartItem: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  trashCart: {
    marginLeft: "auto",
  },
  cartTitle: {
    fontFamily: "BebasNeue-Regular",
    textTransform: "uppercase",
    fontSize: 23,
  },
  cartCategory: {
    fontFamily: "Rubik-Regular",
    textTransform: "capitalize",
    fontSize: 18,
  },
  cartPrice: {
    fontFamily: "Teko-Regular",
    textTransform: "capitalize",
    fontSize: 20,
    color: colors.mainColor,
  },
});
