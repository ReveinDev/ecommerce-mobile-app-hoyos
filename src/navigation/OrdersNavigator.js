import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens/Orders";
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pedidos"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header titleProp={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Pedidos" component={Orders} />
    </Stack.Navigator>
  );
};
