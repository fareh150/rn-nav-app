import { View, Text, Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps
{
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = ({
  children,
  color = 'primary',
  onPress,
  onLongPress,
  variant = 'contained',
  className = ''
}: Props) =>
{

  const btnColor =
  {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  const TextColor =
  {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'text-only')
  {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${TextColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`${btnColor} ${className} rounded-md p-3 active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-center text-white font-work-medium">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
