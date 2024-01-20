import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/shop/cartSlice";

export const ProductDetail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [isPortrait, setIsProtrait] = useState(true);

  const { height, width } = useWindowDimensions();

  const gameId = route.params;

  const gameSelected = useSelector((state) => state.shopSlice.gameSelected);

  useEffect(() => {
    height < width ? setIsProtrait(false) : setIsProtrait(true);
  }, [height]);

  useEffect(() => {
    setIsLoading(false);
  }, [gameId]);

  const dispatch = useDispatch();

  const addGameToCart = () => {
    dispatch(addToCart({ ...gameSelected, quantity: 1 }));
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.gameDetailContainer}>
            <Image
              source={{ uri: gameSelected.portada }}
              style={
                isPortrait
                  ? styles.gameDetailImage
                  : styles.gameDetailImageLandscape
              }
            />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.gameDetailTitle}>{gameSelected.nombre}</Text>
              <Text style={styles.gameDetailDescription}>
                {gameSelected.descripcion}
              </Text>
              <Text style={styles.gameDetailPrice}>
                $ {gameSelected.precio}
              </Text>
              <Pressable
                style={styles.gameDetailBuyButton}
                onPress={addGameToCart}
              >
                <Text style={styles.gameDetailBuyButtonText}>COMPRAR</Text>
              </Pressable>
            </View>
          </ScrollView>
        </>
      )}
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
