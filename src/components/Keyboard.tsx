import { useState } from 'react';
import * as React from 'react';
import Button from './Button';
import { Styles } from '../styles/GlobalStyles'; // Importo los estilos globales
import { View, Text } from 'react-native'; // View es un contenedor que se utiliza para agrupar otros elementos o para aplicar estilos
import { myColors } from '../styles/Colors';


export default function Keyboard() {
    const [firstNumber, setFirstNumber] = useState(''); // Creo un estado local para el primer número que ingrese el usuario
    const [secondNumber, setSecondNumber] = useState(''); // Creo un estado local para el segundo número que ingrese el usuario
    const [operation, setOperation] = useState(''); // Creo un estado local para la operación
    const [result, setResult] = React.useState<Number | null >(null) ; // Creo un estado local para el resultado, puede ser nulo o un número

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };
    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
        setResult(null);
    }

    const getResult = () => {
    switch (operation) {
        case '+':
            clear();
            setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
            break;
        case '-':
            clear();
            setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
            break;
        case '*':
            clear();
            setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
            break;
        case '/':
            clear();
            setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
            break;
        default:
            clear();
            setResult(0);
            break;
        }
    };

    return(
        <View style={Styles.viewBottom}>
            <View style={Styles.row}>
            <Button title="C" isGray onPress={clear} />
            <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
            <Button title="％" isGray onPress={() => handleOperationPress("％")} />
            <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
            <Button title="7" onPress={() => handleNumberPress("7")} />
            <Button title="8" onPress={() => handleNumberPress("8")} />
            <Button title="9" onPress={() => handleNumberPress("9")} />
            <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
            <Button title="4" onPress={() => handleNumberPress("4")} />
            <Button title="5" onPress={() => handleNumberPress("5")} />
            <Button title="6" onPress={() => handleNumberPress("6")} />
            <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
            <Button title="1" onPress={() => handleNumberPress("1")} />
            <Button title="2" onPress={() => handleNumberPress("2")} />
            <Button title="3" onPress={() => handleNumberPress("3")} />
            <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
            <Button title="." onPress={() => handleNumberPress(".")} />
            <Button title="0" onPress={() => handleNumberPress("0")} />
            <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
            <Button title="=" isBlue onPress={() => getResult()} />
            </View>
      </View>
    );
};