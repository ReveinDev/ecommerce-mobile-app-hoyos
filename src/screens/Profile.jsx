import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

export const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.authSlice.profilePicture);
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Seleccionar imagen")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? colors.secondaryColor
                : colors.mainColor,
            },
            styles.imageContainer,
          ]}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.profilePicture}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../assets/img/user.png")}
              style={styles.profilePicture}
              resizeMode="contain"
            />
          )}
        </Pressable>
      </View>
      <View style={styles.userDataContainer}>
        <Text style={styles.userTitle}>Grim Rever</Text>
        <Text style={styles.userData}>Reaper</Text>
        <Text style={styles.userData}>Level: 80</Text>
        <Text style={styles.userData}>Mastery: 126</Text>
        <Text style={styles.userData}>Ascalon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    gap: 20,
    alignItems: "flex-start",
  },
  profilePicture: {
    width: 100,
    height: 100,
  },
  userDataContainer: {
    marginTop: 10,
  },
  userTitle: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 20,
  },
  imageContainer: {
    borderRadius: 100,
  },
  userData: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
  },
});
