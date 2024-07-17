import { useColorScheme } from '@hooks/use-color-scheme'
import { Button } from '@ui/button'
import { Icon } from '@ui/icons'
import { Drawer } from 'expo-router/drawer'
import { usePage } from '@hooks/use-pagination'
export const unstable_settings = {
  initialRouteName: '(tabs)'
}

export default function DrawerLayout() {
  const { toggleColorScheme, isDarkColorScheme } = useColorScheme()
  const {  } = usePage()
  return (
    <Drawer initialRouteName='(tabs)'>
      <Drawer.Screen
        name='men'
        options={{
          title: 'Men',
          drawerLabel: 'Men',
          ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme })
        }}
      />
      <Drawer.Screen
        name='(tabs)'
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
          drawerActiveBackgroundColor: 'transparent',
          drawerType: 'slide',
          ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme })
        }}
      />
    </Drawer>
  )
}

interface ButtonOptions {
  toggleColorScheme: () => void
  isDarkColorScheme: boolean
}
const BUTTONS_OPTIONS = ({
  toggleColorScheme,
  isDarkColorScheme
}: ButtonOptions) => {
  return {
    headerRight: () => {
      return (
        <Button onPress={toggleColorScheme}>
          <Icon
            name={isDarkColorScheme ? 'sunny-snowing' : 'nightlight'}
            size={24}
            color={isDarkColorScheme ? 'yellow' : '#4B77D1'}
          />
        </Button>
      )
    }
  }
}
