import { Icon } from '@ui/icons';
import { useColorScheme } from '@hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {
  const { toggleColorScheme, isDarkColorScheme } = useColorScheme();
  const color = isDarkColorScheme ? 'white' : 'black';
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',

          tabBarIcon: () => <Icon name='home' color={color} />,
          ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme }),
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          tabBarIcon: () => (
            <Icon name='shopping-cart' color={color} />
          ),
          ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme }),
        }}
      />
    </Tabs>
  );
}

interface ButtonOptions {
  toggleColorScheme: () => void;
  isDarkColorScheme: boolean;
}
const BUTTONS_OPTIONS = ({
  toggleColorScheme,
  isDarkColorScheme,
}: ButtonOptions) => {
  return {
    headerRight: () => {
      return (
        <Pressable onPress={toggleColorScheme}>
          <Icon name={isDarkColorScheme ? 'sunny-snowing' : 'nightlight'} size={24} color={isDarkColorScheme ? 'yellow' : '#4B77D1'} />
        </Pressable>
      );
    },
    headerLeft: () => {
      return (
        <Pressable onPress={() => console.log('pressed')}>
          <Icon name='menu' size={24} color={isDarkColorScheme ? 'white' : 'black'} />
        </Pressable>
      )  
    },
  };
};
