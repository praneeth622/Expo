import { View, Text } from 'react-native'
import React from 'react'
import {useUser } from '@clerk/clerk-expo'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'

export default function home() {
  const { user } = useUser()
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* catagory */}
      <Category />
    </View>
  )
}