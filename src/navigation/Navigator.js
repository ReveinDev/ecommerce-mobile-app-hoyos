import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Categories } from "../screens/Categories";
import { ProductsByCategory } from "../screens/ProductsByCategory";
import { ProductDetail } from "../screens/ProductDetail";
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categorias"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header titleProp={route.name} navigation={navigation} />
                    })
                }
            >
                <Stack.Screen name="Categorias" component={Categories} />
                <Stack.Screen name="Juegos" component={ProductsByCategory} />
                <Stack.Screen name="Detalle" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}