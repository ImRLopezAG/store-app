import { useColorScheme } from '@hooks/use-color-scheme'
import { Icon } from '@ui/icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  const { handleColor } = useColorScheme()
  const color = handleColor('white', 'black')
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon name='home' color={color} />
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          tabBarIcon: () => <Icon name='shopping-cart' color={color} />
        }}
      />
    </Tabs>
  )
}
