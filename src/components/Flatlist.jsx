import { FlatList, View, Text, Button, StyleSheet } from "react-native";

export const CustomFlatList = (
    {
        itemsListProp,
        itemsProp,
        selectItemHandlerEvent
    }
) => {
    return (
        <FlatList 
            data={itemsListProp} 
            renderItem={(data) => (
                <View style={styles.renderItemMain}>
                <Text>{data.item.value}</Text>
                <Button onPress={() => selectItemHandlerEvent(data.item.id)} title="x" />
              </View>
            )} 
            keyExtractor={(item, index) => itemsProp.id}
        />
    )
}

const styles = StyleSheet.create({
    renderItemMain : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 4,
        backgroundColor: "lightgray",
        borderRadius: 10,
    }
})