import React from "react";
import { registerRootComponent } from "expo";
import { Categories } from "./screens/Categories";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { ProductsByCategory } from "./screens/ProductsByCategory";

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'FjallaOne-Regular': require('./assets/fonts/FjallaOne-Regular.ttf'),
    'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
      // <Categories />
      <ProductsByCategory />
  );
}

registerRootComponent(App);