import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { ProductItem } from "../components/ProductItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

export const ProductsByCategory = ({ navigation, route }) => {
  const gamesFilteredByCategory = useSelector(
    (state) => state.shopSlice.gamesFilteredByCategory
  );

  const renderItem = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.gamesContainer}>
      <FlatList
        style={styles.gamesContainer}
        data={gamesFilteredByCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gamesContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.mainDark,
  },
});
