import { Stack } from "expo-router"


const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="trial" options={{ headerShown: false }} />      
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />      
      <Stack.Screen name="(stacks)" options={{ headerShown: false }} />      
    </Stack>
  )
}

export default _layout