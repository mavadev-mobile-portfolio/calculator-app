import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text } from 'react-native';



interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleWidth?: boolean;
    onPress: () => void;
}



const CalculatorButton = ({label, color = Colors.darkGray,blackText,onPress,doubleWidth}:Props) => {
  return (
    <Pressable style={({pressed})=> ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleWidth ? 180: 80,
    })} onPress={()=> {
      Haptics.selectionAsync();
      onPress();
    }}>
        <Text 
        style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : 'white'
        }}
        >{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton