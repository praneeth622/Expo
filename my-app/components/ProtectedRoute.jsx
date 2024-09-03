import { View, Text } from 'react-native';
import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import SignInWithOAuth from './SignInWithOAuth';
import LoginScreen from './LoginScreen'

export default function ProtectedRoute({ children }) {
    const { isSignedIn } = useAuth();

    // Redirect users who are not signed in
    if (!isSignedIn) {
        return <LoginScreen />;
    }

    return (
        <Stack>
            {children}
        </Stack>
    );
}
