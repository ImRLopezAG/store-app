import { Providers } from '@app/_providers'
import {
  useColorScheme,
  useInitialAndroidBarSync
} from '@hooks/use-color-scheme'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import './global.css'

export default function Layout() {
  useInitialAndroidBarSync()
  const { isDarkColorScheme } = useColorScheme()
  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />
      {/* WRAP YOUR APP WITH ANY ADDITIONAL PROVIDERS HERE */}

      <Providers>
        <Stack
          screenOptions={{
            animation: 'ios'
          }}
        >
          <Stack.Screen
            name='(drawer)'
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </Providers>
    </>
  )
}
