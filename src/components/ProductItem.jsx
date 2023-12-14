import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from './Card'
import { Pressable } from 'react-native'

export const ProductItem = ({item}) => {
  return (
    <Card>
        <Pressable style={styles.containerProductItem}>
            <Text style={styles.titleProductItem}>{item.nombre}</Text>
            <Image
                style={styles.imageProductItem}
                source={{uri: item.portada}}
            />
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
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
})