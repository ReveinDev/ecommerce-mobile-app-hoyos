import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens/Profile";
import { Header } from "../components/Header";
import { ImageSelector } from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header titleProp={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Seleccionar imagen" component={ImageSelector} />
    </Stack.Navigator>
  );
};
