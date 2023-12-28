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
        <Text style={styles.cartPrice}>{item.precio}</Text>
        <Text style={styles.cartPrice}>
          Cantidad: {item.cantidad}, Total: {item.cantidad * item.precio}
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
    fontFamily: "Rubik-Regular",
    textTransform: "capitalize",
    fontSize: 20,
  },
  cartCategory: {
    fontFamily: "BebasNeue-Regular",
    textTransform: "capitalize",
    fontSize: 15,
  },
  cartPrice: {
    fontFamily: "Teko-Regular",
    textTransform: "capitalize",
    fontSize: 16,
    color: colors.mainColor,
  },
});
