import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";

export const ProductDetail = ({ route }) => {
  const [isPortrait, setIsProtrait] = useState(true);

  const { height, width } = useWindowDimensions();

  const { item } = route.params;

  useEffect(() => {
    height < width ? setIsProtrait(false) : setIsProtrait(true);
  }, [height]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.gameDetailContainer}>
        <Image
          source={{ uri: item.portada }}
          style={
            isPortrait
              ? styles.gameDetailImage
              : styles.gameDetailImageLandscape
          }
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.gameDetailTitle}>{item.nombre}</Text>
          <Text style={styles.gameDetailDescription}>{item.descripcion}</Text>
          <Text style={styles.gameDetailPrice}>$ {item.precio}</Text>
          <Pressable style={styles.gameDetailBuyButton} onPress={() => null}>
            <Text style={styles.gameDetailBuyButtonText}>COMPRAR</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  gameDetailContainer: {
    width: "100%",
    backgroundColor: colors.mainDark,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  gameDetailImage: {
    width: 300,
    height: 200,
    borderColor: colors.secondaryColor,
    borderWidth: 3,
    borderRadius: 5,
  },
  gameDetailImageLandscape: {
    width: 500,
    height: 300,
    borderColor: colors.secondaryColor,
    borderWidth: 3,
    borderRadius: 5,
  },
  gameDetailTitle: {
    color: colors.secondaryColor,
    padding: 10,
    textAlign: "center",
    fontFamily: "ArchivoBlack-Regular",
    fontSize: 25,
  },
  gameDetailDescription: {
    color: colors.mainLight,
    padding: 5,
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    fontSize: 18,
  },
  gameDetailPrice: {
    color: colors.mainColor,
    padding: 20,
    textAlign: "center",
    fontFamily: "PressStart2P-Regular",
    fontSize: 20,
  },
  gameDetailBuyButton: {
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    width: "50%",
    marginBottom: 10,
  },
  gameDetailBuyButtonText: {
    color: colors.mainDark,
    textAlign: "center",
    fontFamily: "BebasNeue-Regular",
    fontSize: 25,
  },
});
