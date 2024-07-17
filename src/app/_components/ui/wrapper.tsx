import { cn } from '@shared/cn'
import { Container } from '@ui/container'
import { Stack } from 'expo-router'
import { forwardRef } from 'react'
import { View, ViewProps } from 'react-native'
interface WrapperProps {
  children: React.ReactNode
  title: string
  className?: string
}

export const Wrapper: React.FC<WrapperProps & ViewProps> = forwardRef(
  ({ children, title, className, ...props }, ref) => {
    return (
      <Container>
        <Stack.Screen options={{ title }} />
        <View className={cn('p-4', className)} {...props}>
          {children}
        </View>
      </Container>
    )
  }
)
