import { View, Text } from 'react-native'
import React from 'react'
import {useUser } from '@clerk/clerk-expo'

export default function home() {
  const { user } = useUser()
  return (
    <View>
      <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
    </View>
  )
}