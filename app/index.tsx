import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Platform, View } from 'react-native';

import { useCalculator } from '@/hooks/useCalculator';
import * as NavigationBar from 'expo-navigation-bar';


const isAndroid = Platform.OS === 'android';

if (isAndroid){
  NavigationBar.setBackgroundColorAsync('black');
}


const CalculatorApp = () => {

  const { prevNumber,number,buildNumber,formula,clean,toggleSign,deleteLast,divideOperation } = useCalculator();

  return (
    <View  style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom:20 }}>
        <ThemeText>{formula}</ThemeText>
        <ThemeText variant='h2'>{formula === prevNumber ? '': prevNumber}</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.lightGray} blackText={true} label='C' onPress={()=>  clean()} />
        <CalculatorButton color={Colors.lightGray} blackText={true} label='+/-' onPress={()=>  toggleSign()} />
        <CalculatorButton color={Colors.lightGray} blackText={true} label='del' onPress={()=>  deleteLast()} />
        <CalculatorButton color={Colors.orange} label='÷' onPress={()=>  divideOperation()} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} label='7' onPress={()=>  buildNumber('7')} />
        <CalculatorButton color={Colors.darkGray} label='8' onPress={()=>  buildNumber('8')} />
        <CalculatorButton color={Colors.darkGray} label='9' onPress={()=>  buildNumber('9')} />
        <CalculatorButton color={Colors.orange} label='x' onPress={()=>  console.log('')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} label='4' onPress={()=>  buildNumber('4')} />
        <CalculatorButton color={Colors.darkGray} label='5' onPress={()=>  buildNumber('5')} />
        <CalculatorButton color={Colors.darkGray} label='6' onPress={()=>  buildNumber('6')} />
        <CalculatorButton color={Colors.orange} label='-' onPress={()=>  console.log('')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} label='1' onPress={()=>  buildNumber('1')} />
        <CalculatorButton color={Colors.darkGray} label='2' onPress={()=>  buildNumber('2')} />
        <CalculatorButton color={Colors.darkGray} label='3' onPress={()=>  buildNumber('3')} />
        <CalculatorButton color={Colors.orange} label='+' onPress={()=>  console.log('')} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.darkGray} label='0' onPress={()=>  buildNumber('0')} doubleWidth/>
        <CalculatorButton color={Colors.darkGray} label='.' onPress={()=>  buildNumber('.')} />
        <CalculatorButton color={Colors.orange} label='=' onPress={()=>  console.log('')} />
      </View>
    </View>
  )
}

export default CalculatorApp