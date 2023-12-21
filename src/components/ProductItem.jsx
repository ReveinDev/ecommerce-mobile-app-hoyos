import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Card } from './Card'
import { Pressable } from 'react-native'

export const ProductItem = ({gameId, navigation}) => {
  return (
    <Card>
        <Pressable style={styles.containerProductItem} onPress={() => navigation.navigate("Detalle del Juego")}>
            <Image
                style={styles.imageProductItem}
                resizeMode='cover'
                source={{uri: gameId.portada}}
            />
            <Text style={styles.titleProductItem}>{gameId.nombre}</Text>
        </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    titleProductItem: {
        fontFamily: 'BebasNeue-Regular',
        paddingVertical: 20,
    },
    imageProductItem: {
        width: 60,
        height: 60,
    }
})