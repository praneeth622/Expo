import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function _layout() {
  return (
    <ProtectedRoute>
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color}  />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Pfile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color}  />
          ),
        }}
      />
    </Tabs>
    </ProtectedRoute>
  );
}
