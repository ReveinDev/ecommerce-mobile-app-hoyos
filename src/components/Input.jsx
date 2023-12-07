import { View, TextInput, Button, StyleSheet } from "react-native";

export const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        changeTextHandlerEvent,
        addItemHandlerEvent
    }
) => {
  return (
    <View style={styles.inputMain}>
      <TextInput
        placeholder={placeholderProp}
        style={styles.textInput}
        value={textItemProp}
        onChangeText={changeTextHandlerEvent}
      />
      <Button title="AGREGAR" onPress={addItemHandlerEvent} />
    </View>
  )
}

const styles = StyleSheet.create({
    inputMain : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput : {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '70%'
    }
})