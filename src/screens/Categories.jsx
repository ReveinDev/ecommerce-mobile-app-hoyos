import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { CategoryItem } from "../components/CategoryItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

export const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.shopSlice.categoriesData);

  const renderItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        style={styles.categoriesContainer}
        renderItem={renderItem}
        data={categories}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.mainDark,
  },
});
