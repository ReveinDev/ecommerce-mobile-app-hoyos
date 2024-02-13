import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture, setUser } from "../features/shop/authSlice";
import { getSessions } from "../db";

export const MainNavigator = () => {
  const user = useSelector((state) => state.authSlice.user);
  const localId = useSelector((state) => state.authSlice.localId);
  const { data, isLoading } = useGetProfilePictureQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image));
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const session = await getSessions();
        console.log("Session: ", session);
        if (session?.rows.length) {
          console.log("Se ha iniciado sesion");
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log("Error al iniciar sesion: ", error.message);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
