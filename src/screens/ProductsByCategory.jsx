import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import games from "../data/games.json";
import { ProductItem } from "../components/ProductItem";
import { colors } from "../global/colors";

export const ProductsByCategory = ({ navigation, route }) => {
  const [gamesByCategory, setGamesByCategory] = useState([]);

  const { category } = route.params;

  useEffect(() => {
    const gamesFilterByCategory = games.filter(
      (game) => game.genero === category
    );
    setGamesByCategory(gamesFilterByCategory);
  }, [category]);

  const renderItem = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.gamesContainer}>
      <FlatList
        style={styles.gamesContainer}
        data={gamesByCategory}
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
