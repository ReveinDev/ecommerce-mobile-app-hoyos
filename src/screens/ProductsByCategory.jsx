import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetGamesByCategoryQuery } from "../services/shopService";

export const ProductsByCategory = ({ navigation }) => {
  const [gamesByCategory, setGamesByCategory] = useState([]);
  const categoria = useSelector((state) => state.shopSlice.categorySelected);
  const { data: gamesFilteredByCategory, isLoading } =
    useGetGamesByCategoryQuery(categoria);

  useEffect(() => {
    if (!isLoading) {
      const gamesValues = Object.values(gamesFilteredByCategory);
      setGamesByCategory(gamesValues);
    }
  }, [isLoading, categoria]);

  const renderItem = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.gamesContainer}>
            <FlatList
              style={styles.gamesContainer}
              data={gamesByCategory}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  gamesContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.mainDark,
  },
});
