import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartItem } from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const total = useSelector((state) => state.cartSlice.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({total, cartItems, user: 'loggedUser'});
  }

  const renderCartItems = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItems}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <Pressable style={styles.confirmButton} onPress={confirmCart}>
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
    backgroundColor: colors.mainDark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: "PressStart2P-Regular",
    color: colors.mainLight,
    marginTop: 10,
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
    textTransform: "uppercase",
  },
});
