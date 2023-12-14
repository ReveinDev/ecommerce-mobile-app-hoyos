import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export const Header = ({titleProp}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleLogo}>{titleProp}</Text>
      <Image style={styles.headerLogo} source={require('../assets/img/icons/logo.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#242F40',
        height: 100,
        padding: 30
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
        paddingTop: 10
    }
})