import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture } from "../features/shop/authSlice";
import { usePostProfilePictureMutation } from "../services/shopService";

export const ImageSelector = ({ navigation }) => {
  const localId = useSelector((state) => state.authSlice.localId);

  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const [triggerSaveProfilePicture, result] = usePostProfilePictureMutation();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };
  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    } else {
      console.log("Permisos de camara rechazados");
    }
  };
  const confirmImage = () => {
    dispatch(setProfilePicture(image));
    triggerSaveProfilePicture({ image, localId });
    navigation.goBack();
  };

  return (
    <View>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={pickImage}>
              <Text style={styles.textButton}>Tomar otra</Text>
            </Pressable>
            <Pressable
              style={{ ...styles.button, ...styles.buttonConfirm }}
              onPress={confirmImage}
            >
              <Text style={styles.textButton}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.noImageContainer}>
          <Feather name="camera-off" size={200} color={colors.mainDark} />
          <Pressable style={styles.button} onPress={pickImage}>
            <Text style={styles.textButton}>Abrir camara</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: colors.mainColor,
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  textButton: {
    color: colors.mainLight,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buttonConfirm: {
    backgroundColor: colors.secondaryColor,
    paddingHorizontal: 50,
  },
});
