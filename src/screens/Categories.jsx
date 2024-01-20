import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { CategoryItem } from "../components/CategoryItem";
import { colors } from "../global/colors";
import { useGetCategoriasQuery } from "../services/shopService";

export const Categories = ({ navigation }) => {
  const { data } = useGetCategoriasQuery();

  const renderItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        style={styles.categoriesContainer}
        renderItem={renderItem}
        data={data}
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
