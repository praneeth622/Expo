import { View, Text } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import LoginScreen from './LoginScreen';

export default function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <LoginScreen />;
  }

  return children;
}
