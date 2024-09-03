import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Link } from "expo-router";
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

    useWarmUpBrowser()

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
            })

            if (createdSessionId) {
                setActive!({ session: createdSessionId })
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error('OAuth error', err)
        }
    }, [])

    return (
        <View>
            <View style={{ margin: 50 }}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Link href="/(auth)/sign-in">
                        <Text style={{ textAlign: 'center', color: '#fff' }}>Let's Get Started</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#77f',
        padding: 16,
        color: '#fff',
        margin: 100,
        borderRadius: 50
    },
});