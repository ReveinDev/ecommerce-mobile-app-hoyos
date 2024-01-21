import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useSelector } from "react-redux";

export const MainNavigator = () => {
  const user = useSelector((state) => state.authSlice.user);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
