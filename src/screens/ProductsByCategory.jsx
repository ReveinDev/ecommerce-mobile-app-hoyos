import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import games from '../data/games.json'
import { ProductItem } from '../components/ProductItem'
import { Header } from '../components/Header'

export const ProductsByCategory = ({navigation, route}) => {
  const [gamesByCategory, setGamesByCategory] = useState([])

  const {category} = route.params

  useEffect(() => {
    const gamesFilterByCategory = games.filter(game => game.genero === category)
    setGamesByCategory(gamesFilterByCategory)
  }, [category])

  const renderItem = ({item}) => (
    <ProductItem gameId={item} navigation={navigation}/>
  )

  return (
    <>
      <Header titleProp={"Juegos"}/>
      <FlatList
        data={gamesByCategory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({})