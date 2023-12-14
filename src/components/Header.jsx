import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export const Header = ({titleProp}) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerLogo} source={require('../assets/img/icons/logo.png')}/>
      <Text style={styles.titleLogo}>{titleProp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#242F40',
        height: 100,
    },
    headerLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    titleLogo: {
        fontSize: 20,
        color: colors.mainColor,
        textTransform: 'uppercase',
        fontFamily: 'PressStart2P-Regular',
        marginTop: 5
    }
})