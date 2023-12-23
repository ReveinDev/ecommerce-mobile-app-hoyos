import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import categorias from '../data/categorias.json'
import { CategoryItem } from '../components/CategoryItem'
import { colors } from '../global/colors'

export const Categories = ({navigation}) => {
  const renderItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return (
    <View style={styles.categoriesContainer}>
        <FlatList
            style={styles.categoriesContainer}
            renderItem={renderItem}
            data={categorias}
            keyExtractor={item => item}
        /> 
    </View>
  )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.mainDark,
    }
})