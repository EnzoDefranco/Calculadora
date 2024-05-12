// const firstNumberDisplay = () => {
//     if (result !== null) {
//         return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
//     }
//     if (firstNumber && firstNumber.length < 6) {
//       return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
//     }
//     if (firstNumber === "") {
//       return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
//     }
//     if (firstNumber.length > 5 && firstNumber.length < 8) {
//       return (
//         <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
//           {firstNumber}
//         </Text>
//       );
//     }
//     if (firstNumber.length > 7) {
//       return (
//         <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
//           {firstNumber}
//         </Text>
//       );
//     }
//   };

//   <View
//   style={{
//     height: 120,
//     width: "90%",
//     justifyContent: "flex-end",
//     alignSelf: "center",
//   }}
// >
//   <Text style={Styles.screenSecondNumber}>
//     {secondNumber}
//     <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
//   </Text>
//   {firstNumberDisplay()}
// </View>


import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { ThemeContext } from "../context/ThemeContext"; // Importo el contexto ThemeContext


interface DisplayProps {
    firstNumber: string;
    secondNumber: string;
    operation: string;
    result: number | null;
}

const Display: React.FC<DisplayProps> = ({ firstNumber, secondNumber, operation, result }) => {
    const theme = useContext(ThemeContext);
    const firstNumberDisplay = () => {
        if ((result !== null || result === 0) && firstNumber === "" && secondNumber === "") {
            return <Text style={result < 99999 ? (theme === 'dark' ? [Styles.resultTextDark] : [Styles.resultTextLight]) : [Styles.screenFirstNumber, { fontSize: 50 }]}>{result?.toString()}</Text>;
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={theme === 'dark' ? [Styles.resultTextDark] : [Styles.resultTextLight]}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={theme === 'dark' ? [Styles.resultTextDark] : [Styles.resultTextLight]}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[theme === 'dark' ? [Styles.resultTextDark] : [Styles.resultTextLight], { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[theme === 'dark' ? [Styles.resultTextDark] : [Styles.resultTextLight], { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    }

    // Add a return statement to return the JSX
    return (

        <View
            style={{
                height: 120,
                width: "90%",
                justifyContent: "flex-end",
                alignSelf: "center",
            }}
        >
            <Text style={theme === 'dark' ? [Styles.resultTextDark, { fontSize: 25 }] : [Styles.resultTextLight,{ fontSize: 25 }]}>
                {secondNumber}
                <Text style={{ color: myColors.gray, fontSize: 25, fontWeight: '500', marginLeft: 2 }}>{operation}</Text>
            </Text>
            {firstNumberDisplay()}
        </View>
    );
}

export default Display;