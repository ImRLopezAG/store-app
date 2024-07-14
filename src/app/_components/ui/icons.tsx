import { MaterialIcons } from '@expo/vector-icons';
import { cn } from '@shared/cn';
import { Platform } from 'react-native';
interface IconProps {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = 28, color, className, ...props }: IconProps) => {
  return (
    <MaterialIcons
      className={cn(className, 
        Platform.OS !== 'android' && 'p-3', 
        Platform.OS === 'android' && 'px-3')}
      name={name}
      size={size}
      color={color}
      {...props}
    />
  );
};
