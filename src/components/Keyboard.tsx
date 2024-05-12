import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import Display from "./Display";
import { useState } from "react";





export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number>(0);

  // En esta funciuón se maneja el evento de presionar un número, se recibe el valor del botón presionado

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  // En esta función se maneja el evento de presionar una operación, se recibe el valor del botón presionado
  const handleOperationPress = (buttonValue: string) => {
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
      let res;
      switch (operation) {
        case "+":
          res = parseInt(secondNumber) + parseInt(firstNumber);
          break;
        case "-":
          res = parseInt(secondNumber) - parseInt(firstNumber);
          break;
        case "*":
          res = parseInt(secondNumber) * parseInt(firstNumber);
          break;
        case "/":
          res = parseInt(secondNumber) / parseInt(firstNumber);
          break;
        default:
          res = 0;
      }
      setResult(res);
      setFirstNumber(res.toString());
      setSecondNumber("");
      setOperation("");
    };


  

  return (
    console.log("El primer numero es: ", firstNumber + " El segundo numero es: " + secondNumber + " La operación es: " + operation + " El resultado es: " + result ) ,
    <View style={Styles.viewBottom}>
    <View>
      <Display firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} result={result} />
    </View>
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
}