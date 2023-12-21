import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import games from '../data/games.json'

export const ProductDetail = ({route}) => {
  const [getGameById, setGetGameById] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsProtrait] = useState(true)

  const { height, width } = useWindowDimensions()
  
  const gameId = route.params

  useEffect(() => {
    height < width ? setIsProtrait(false) : setIsProtrait(true)
  }, [height])

  useEffect(() => {
    const gameFindById = games.find(game => game.id === gameId)
    setGetGameById(gameFindById)
    setIsLoading(false)
  }, [gameId])

  return (
    <>
      {
      isLoading
      ?
      <ActivityIndicator/>
      :
      <>
        <ScrollView>
          <Image
            source={{uri: getGameById.portada}}
            resizeMode='cover' 
          />
          <View>
            <Text>{getGameById.nombre}</Text>
            <Text>{getGameById.descripcion}</Text>
            <Text>$ {getGameById.precio}</Text>
            <Pressable onPress={() => null}>COMPRAR</Pressable>
          </View>
        </ScrollView>
      </>
      }
    </>
  )
}

const styles = StyleSheet.create({})