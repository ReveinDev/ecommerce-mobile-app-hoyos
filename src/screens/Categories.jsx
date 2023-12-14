import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import categorias from '../data/categorias.json'
import { CategoryItem } from '../components/CategoryItem'
import { Header } from '../components/Header'

export const Categories = ({onSelectCategoryEvent}) => {
  const renderItem = ({item}) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
  )

  return (
    <View style={styles.categoriesContainer}>
        <Header titleProp={"CATEGORIAS"}/>
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
    }
})