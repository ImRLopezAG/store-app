import { Icon } from '@components/icons';
import { useColorScheme } from '@hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { SWRConfig } from 'swr';

export default function TabLayout({ children }: { children: React.ReactNode }) {
  const { toggleColorScheme, isDarkColorScheme } = useColorScheme();
  return (
    <SWRConfig value={{}}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Icon name='home' color={color} />,
            ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme }),
          }}
        />
        <Tabs.Screen
          name='cart'
          options={{
            title: 'Cart',
            tabBarIcon: ({ color }) => (
              <Icon name='shopping-cart' color={color} />
            ),
            ...BUTTONS_OPTIONS({ toggleColorScheme, isDarkColorScheme }),
          }}
        />
      </Tabs>
    </SWRConfig>
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
          {isDarkColorScheme && (
            <Icon name='sunny-snowing' size={24} color='yellow' />
          )}
          {!isDarkColorScheme && <Icon name='nightlight' size={24} color='#4B77D1' />}
        </Pressable>
      );
    },
    headerLeft: () => {
      return <Icon name='menu' size={24} color='black' />;
    },
  };
};
