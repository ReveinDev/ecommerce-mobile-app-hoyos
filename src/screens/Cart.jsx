import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import cart from "../data/cart";
import { CartItem } from "../components/CartItem";
import { colors } from "../global/colors";

export const Cart = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => (acc += item.precio * item.cantidad),
      0
    );
    setTotal(total);
  }, [cart]);

  const renderCartItems = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={renderCartItems}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <Pressable style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: "PressStart2P-Regular",
  },
  confirmButton: {
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: "ArchivoBlack-Regular",
    fontSize: 16,
    color: colors.mainColor,
  },
});
