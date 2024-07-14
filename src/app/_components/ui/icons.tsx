import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
interface IconProps {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = 'black', ...props }: IconProps) => {
  return <MaterialIcons className='p-3' name={name} size={size} color={color} {...props} />;
};
