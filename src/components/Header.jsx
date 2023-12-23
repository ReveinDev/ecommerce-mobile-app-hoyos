import { StyleSheet, Text, View, Image, Pressable, ScrollView, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons'

export const Header = ({titleProp, navigation}) => {
  const [isPortrait, setIsProtrait] = useState(true)

  const { height, width } = useWindowDimensions()

  useEffect(() => {
    height < width ? setIsProtrait(false) : setIsProtrait(true)
  }, [height])

  return (
    <>
      <ScrollView contentContainerStyle={styles.headerMainContainer}>
        <View style={isPortrait ? styles.headerSubContainerBrand : styles.headerSubContainerBrandLandscape}>
          <Text style={styles.titleText}>Revein</Text>
          <Pressable onPress={navigation.popToTop}>
            <Image style={styles.headerLogo} source={require('../assets/img/icons/logo.png')}/>
          </Pressable>
          <Text style={styles.titleText}>Games</Text>
        </View>
        <View style={styles.headerSubContainerNav}>
          <Pressable onPress={navigation.goBack}>
            <AntDesign name="leftcircleo" size={30} color={colors.mainLight} />
          </Pressable>
          <Text style={styles.categoryText}>{titleProp}</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    headerMainContainer: {
      alignItems: 'center',
      backgroundColor: colors.mainDark,
      height: 160,
      padding: 30,
    },
    headerLogo: {
      width: 65,
      height: 65,
      resizeMode: 'contain',
    },
    headerSubContainerBrand: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      paddingBottom: 5,
    },
    headerSubContainerBrandLandscape: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '60%',
      paddingBottom: 5,
    },
    headerSubContainerNav: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      borderTopColor: colors.secondaryColor,
      borderTopWidth: .5,
      paddingVertical: 5,
    },
    titleText: {
      fontSize: 18,
      color: colors.mainColor,
      textTransform: 'uppercase',
      fontFamily: 'PressStart2P-Regular',
    },
    categoryText: {
      fontSize: 35,
      color: colors.secondaryColor,
      textTransform: 'uppercase',
      fontFamily: 'BebasNeue-Regular',
      paddingStart: 20,
    }
})