import * as SecureStore from 'expo-secure-store';
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from '../components/LoginScreen';
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from 'expo-router';


SplashScreen.preventAutoHideAsync();
const tokenCache = {

  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log('No values stored under key: ' + key);
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error: ', error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error('SecureStore save item error: ', err);
    }
  },
};

const publishableKey = 'pk_test_Y2xvc2luZy1iaXJkLTgzLmNsZXJrLmFjY291bnRzLmRldiQ';

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  );
}

export default function RootLayout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'outfit': require("../assets/fonts/NotoSans-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Optionally render a loading screen while fonts are loading
  }

  const handlePress = () => {
    router.push('/auth/sign-in');
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <Slot />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
