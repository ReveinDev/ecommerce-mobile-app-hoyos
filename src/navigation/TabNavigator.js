import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopNavigator } from "./ShopNavigator";
import { CartNavigator } from "./CartNavigator";
import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { OrdersNavigator } from "./OrdersNavigator";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tab,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="game-controller"
                  size={30}
                  color={focused ? colors.mainLight : colors.mainDark}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialCommunityIcons
                  name="cart-arrow-right"
                  size={30}
                  color={focused ? colors.mainLight : colors.mainDark}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={30}
                  color={focused ? colors.mainLight : colors.mainDark}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.mainColor,
    shadowColor: colors.mainDark,
    height: 90,
  },
});
