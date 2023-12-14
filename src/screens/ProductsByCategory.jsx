import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import games from '../data/games.json'
import { ProductItem } from '../components/ProductItem'
import { Header } from '../components/Header'

export const ProductsByCategory = () => {
  const renderItem = ({item}) => (
    <ProductItem item={item}/>
  )

  return (
    <>
      <Header titleProp={"Juegos"}/>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({})