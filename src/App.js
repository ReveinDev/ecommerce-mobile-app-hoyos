import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState } from "react";
import { registerRootComponent } from "expo";
import { CustomModal } from "./components/Modal";
import { CustomInput } from "./components/Input";
import { CustomFlatList } from "./components/Flatlist";

export default function App() {
  const [items, setItems] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const changeTextHandler = (text) => {
    setItems(text);
  };

  const addItemHandler = () => {
    let generateRandomId = () => Math.floor(Math.random() * 1001)
    setItemsList((prevState) => [
      ...prevState,
      { id: generateRandomId().toString(), value: items },
    ]);
    setItems("");
  };

  const selectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelected(itemsList.find((item) => item.id === id));
  };

  const deleteItemHandler = () => {
    setItemsList((prevState) =>
      prevState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ padding: 30 }}>
      <CustomInput
        placeholderProp={"Escribe un item"}
        textItemProp={items} 
        changeTextHandlerEvent={changeTextHandler}
        addItemHandlerEvent={addItemHandler}
      />
      <CustomFlatList
        itemsListProp={itemsList}
        itemsProp={items}
        selectItemHandlerEvent={selectItemHandler}
      />
      <CustomModal
        animationTypeProp={"fade"}
        modalVisibleProp={modalVisible}
        setModalVisibleEvent={setModalVisible}
        itemSelectedProp={itemSelected}
        deleteItemHandlerEvent={deleteItemHandler}
      />
    </View>
  );
}

registerRootComponent(App);