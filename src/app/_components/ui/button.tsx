import { cn } from '@shared/cn'
import { Pressable, PressableProps } from 'react-native'

type ButtonProps = PressableProps
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Pressable {...props} className={cn(className)}>
      {children}
    </Pressable>
  )
}
