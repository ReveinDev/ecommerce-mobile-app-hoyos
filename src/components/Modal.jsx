import { Modal, View, Text, Button, StyleSheet } from "react-native";

export const CustomModal = (
    {
        animationTypeProp,
        modalVisibleProp,
        setModalVisibleEvent,
        itemSelectedProp,
        deleteItemHandlerEvent
    }

) => {
  return (
    <Modal visible={modalVisibleProp} animationType={animationTypeProp}>
      <View style={styles.modalMessage}>
        <Text>Se eliminara:</Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtons}>
        <Button
          title="ELIMINAR"
          onPress={deleteItemHandlerEvent}
          color="red"
        />
        <Button
          title="CANCELAR"
          onPress={() => setModalVisibleEvent(!modalVisibleProp)}
          color="black"
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalMessage : {
        paddingTop: 50,
        alignItems: 'center'
    },
    modalButtons : {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})