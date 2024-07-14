import { cn } from '@shared/cn';
import { Container } from '@ui/container';
import { Stack } from 'expo-router';
import { View } from 'react-native';
interface WrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <Container>
      <Stack.Screen options={{ title }} />
      <View className={cn('p-4', className)}>{children}</View>
    </Container>
  );
};
