import { StyleSheet, View } from 'react-native'
import React from 'react'

export const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 3,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})