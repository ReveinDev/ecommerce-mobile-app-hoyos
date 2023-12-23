import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Card } from './Card'
import { Pressable } from 'react-native'
import { colors } from '../global/colors'

export const ProductItem = ({item, navigation}) => {
  return (
    <Card style={styles.gamesContainer}>
        <Pressable style={styles.gameButton} onPress={() => navigation.navigate("Detalle", {item})}>
            <Image
                style={styles.imageProductItem}
                resizeMode='cover'
                source={{uri: item.portada}}
            />
            <Text style={styles.titleProductItem}>{item.nombre}</Text>
        </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
    gamesContainer: {
        margin: 10,
        borderColor: colors.secondaryColor,
        borderWidth: 4,
        borderRadius: 5,
        height: 85,
        paddingVertical: 6,
    },
    gameButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 5,
    },
    titleProductItem: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 17,
        paddingLeft: 10,
        color: colors.mainDark,
    },
    imageProductItem: {
        width: 65,
        height: 65,
        borderRadius: 5,
    }
})