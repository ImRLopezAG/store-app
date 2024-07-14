import { useColorScheme } from '@hooks/use-color-scheme';
import { cn } from '@shared/cn';
import { Text as RNText } from 'react-native';

type TextProps = Props & {
  text?: string;
};

export const Text: React.FC<TextProps> = ({ children, className, text }) => {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <RNText
      className={cn(isDarkColorScheme ? 'text-white' : 'text-black', className)}
    >
      {text || children}
    </RNText>
  );
};
