import { ViewProps, Pressable } from 'react-native';
import {cn} from '@shared/cn'

type ButtonProps = ViewProps
export const Button: React.FC<ButtonProps> = ({ children, className, ...viewProps }) => {
  return (
    <Pressable {...viewProps} className={cn(styles.button, className)}>
      {children}
    </Pressable>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
