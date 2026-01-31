import { Stack } from 'expo-router'
const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="live" options={{ headerShown: false }} />
        <Stack.Screen name="newjob" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout