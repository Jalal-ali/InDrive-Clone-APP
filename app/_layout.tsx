import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerShown: false, // Default header visibility
      animation: 'slide_from_right', // Customize transition animations
    }}
  />
  )
}
