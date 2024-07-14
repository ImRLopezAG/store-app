import { cn } from '@shared/cn';
import { SafeAreaView } from 'react-native';

export const Container: React.FC<Props> = ({ children, className }) => (
  <SafeAreaView className={cn(styles.container, className)}>
    {children}
  </SafeAreaView>
);

const styles = {
  container: 'flex flex-1',
};
