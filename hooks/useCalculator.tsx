import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷'
}



export const useCalculator = () => {
    const [formula,setFormula] =useState('0');
    const [number,setNumber] =useState('0')
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(undefined);

    useEffect(()=> {
        setFormula(number);
    },[number]);

    useEffect(()=> {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula( `${firstFormulaPart} ${lastOperation.current} ${number}`);
        }else{
            setFormula(number);
        }
    },[number])
    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if(number.startsWith('0')) return;
        if(number.includes('-')){
            return setNumber(number.replace('-',''));
        }
        setNumber('-' + number);
    }

    const deleteLast = () => {
        if(number.length === 1 || (number)) {
            setNumber('0');
            return;
        }
        const isNegative = number.startsWith('-');
        if( (!isNegative && number.length > 1) || (isNegative && number.length>2)){
            setNumber(number.slice(0,-1))
        }
    }


    
    const setLastNumber = () => {
        // Calcualte result
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        }
        setPrevNumber(number);
        setNumber('0');
    }   
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const buildNumber = ( numberString: string ) => {
        // Verficar si ya existe el punto decimal.
        if (number.includes('.') && numberString === '.') return;
        if(number.startsWith('0') || numberString.startsWith('-0')){
            if (numberString === '.'){
                return setNumber(number + numberString)
            }
            //Evaluar si es otro cero y no hay punto
            if(numberString === '0' && number.includes('.')){
                return setNumber(number+numberString);
            }

            //Evaluar si es diferente de cero, no hay punto y es el primer número
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString);
            }

            // Evitar multiples 00000
            if(numberString === '0' && !number.includes('.')){
                return;
            }
        }

        setNumber(number + numberString);
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation
    }
    
}