import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown : false}}>
      <Tabs.Screen name='Home' options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><FontAwesome name="home" size={24} color="black" />
      }}/>
      <Tabs.Screen name='Explore' />
      <Tabs.Screen name='Profile' />
    </Tabs>
  )
}