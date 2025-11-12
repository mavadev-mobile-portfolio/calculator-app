import { globalStyles } from '@/styles/global-styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}


const ThemeText = ({variant = 'h1', children, ...rest}: Props) => {
    return (
        <Text 
        numberOfLines={1} 
        adjustsFontSizeToFit 
        style={
            [
            { color: 'white', fontFamily: 'SpaceMono' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult]} 
            {...rest}>{children}</Text>
    )
}

export default ThemeText
