import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "./Card";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../global/colors";

export const OrdersItem = ({ order, total }) => {
  return (
    <Card style={styles.cartItemContainer}>
      <View>
        <Text style={styles.createdAt}>
          Creada el {new Date(order.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.total}>Total: ${total}</Text>
      </View>
      <Pressable style={styles.searchIcon} onPress={null}>
        <Ionicons
          name="search-circle-outline"
          size={24}
          color={colors.mainDark}
        />
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
  searchIcon: {
    marginLeft: "auto",
  },
  createdAt: {
    fontFamily: "Teko-Regular",
    marginBottom: 5,
  },
  total: {
    fontFamily: "Rubik-Regular",
    fontSize: 14,
  },
});
