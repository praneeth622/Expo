import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }
  //As of now we are using google auth if we need the this auth route it display form and 
  // ask to fill the userid and password 
  // if u want to change go to protected routes and chage lockscreen and rediret or navite to (auth)/sign-in page
  // but as of now i am getting errror while navigating 

  return <Stack />
}