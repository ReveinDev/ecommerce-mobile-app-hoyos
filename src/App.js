import React from "react";
import { registerRootComponent } from "expo";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { TabNavigator } from "./navigation/TabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
    "PressStart2P-Regular": require("./assets/fonts/PressStart2P-Regular.ttf"),
    "Teko-Regular": require("./assets/fonts/Teko-Regular.ttf"),
    "ArchivoBlack-Regular": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return <TabNavigator />;
}

registerRootComponent(App);
