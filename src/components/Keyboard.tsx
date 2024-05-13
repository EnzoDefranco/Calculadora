import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import Display from "./Display";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareRootAlt, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import Calculator from "./Calculator";







export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number>(0);
  const [error, setError] = useState<string | null>(null);

  // En esta funciuón se maneja el evento de presionar un número, se recibe el valor del botón presionado

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  // En esta función se maneja el evento de presionar una operación, se recibe el valor del botón presionado
  const handleOperationPress = (buttonValue: string) => {
    if (operation) return; // Si ya hay una operación seleccionada, no se permite seleccionar otra
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  // En esta función se maneja el evento de presionar el botón de igual

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(0);
  };


  const getResult = () => {
    try {
      let resul;
      switch (operation) {
        case "+":
          resul = Calculator.add(parseFloat(secondNumber), parseFloat(firstNumber));
          break;
        case "-":
          resul = Calculator.sub(parseFloat(secondNumber), parseFloat(firstNumber));
          break;
        case "*":
          resul = Calculator.mul(parseInt(secondNumber), parseInt(firstNumber));
          break;
        case "/":
          resul = Calculator.div(parseFloat(secondNumber), parseFloat(firstNumber));
          break;
        case "√":
          resul = Calculator.raiz(parseFloat(firstNumber));
          break;
        case "^":
          resul = Calculator.pow(parseFloat(secondNumber), parseFloat(firstNumber));
          break;
        default:
          resul = 0;
      }
      console.log("El resultado es: ", resul);
      setResult(Number(resul));
      setFirstNumber(resul.toString());
      setSecondNumber("");
      setOperation("");
    } catch (error) {
      if (error instanceof Error) {
        // Aquí estableces el mensaje de error en el estado del componente
        setError(error.message);
        // Aquí limpias el mensaje de error después de 3 segundos
        setTimeout(() => {
          setError(null);
        }, 1000);
        clear();
        console.log(error.message);
      }
    }
  };


  

  return (
    // console.log("El primer numero es: ", firstNumber + " El segundo numero es: " + secondNumber + " La operación es: " + operation + " El resultado es: " + result ) ,
    <View style={Styles.viewBottom}>
    <View>
      <Display errorMessage={error} firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} result={result}   />
    </View>
      <View style={Styles.row}>
        <Button title="C" isRed onPress={clear} />
        <Button isGray onPress={() => handleOperationPress("√")}>
          <FontAwesomeIcon icon={faSquareRootAlt} size={30} color="white" />
        </Button>
        <Button title="^" isGray onPress={() => handleOperationPress("^")} />
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
        <Button title="+" isBlue onPress={() => handleOperationPress("+") } />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button onPress={() => setFirstNumber(firstNumber.slice(0, -1)) }>
          <FontAwesomeIcon icon={faDeleteLeft} size={30}  />
        </Button>
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}

