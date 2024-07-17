import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useColorScheme } from '@hooks/use-color-scheme'
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native'
import { NAV_THEME } from '@shared/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { PaginationProvider } from './context'
import { QueryProvider } from './query'
import { SWRProvider } from './swr'

export const Providers: React.FC<Props> = ({ children }) => {
  const { colorScheme } = useColorScheme()

  return (
    <QueryProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ActionSheetProvider>
            <NavThemeProvider value={NAV_THEME[colorScheme]}>
              <SWRProvider>
                <PaginationProvider>{children}</PaginationProvider>
              </SWRProvider>
            </NavThemeProvider>
          </ActionSheetProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryProvider>
  )
}
