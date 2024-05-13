import { StyleSheet } from "react-native";
import { myColors } from "./Colors";


export const Styles = StyleSheet.create({
        btnBlue: { // Estilos del botón azul
            width: 72, // Ancho del botón
            height: 72, // Alto del botón
            borderRadius: 24, // Borde redondeado
            backgroundColor: myColors.blue, // Color de fondo
            justifyContent: "center", // Alineación vertical
            alignItems: "center", // Alineación horizontal
            margin: 8, // Margen
        },
        btnDark: { // Estilos del botón oscuro
            width: 72,
            height: 72,
            borderRadius: 24,
            backgroundColor: myColors.btnDark,
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
        },
        btnLight: { // Estilos del botón claro
            width: 72,
            height: 72,
            borderRadius: 24,
            backgroundColor: myColors.white,
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
        },
        btnGray: { // Estilos del botón gris
            width: 72,
            height: 72,
            borderRadius: 24,
            backgroundColor: myColors.btnGray,
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
        },
        btnRed: { // Estilos del botón rojo
            width: 72,
            height: 72,
            borderRadius: 24,
            backgroundColor: myColors.red,
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
        },
        smallTextLight: { // Estilos del texto pequeño claro
            fontSize: 32,
            color: myColors.white,
        },
        smallTextDark: { // Estilos del texto pequeño oscuro
            fontSize: 32,
            color: myColors.black,
        },
        // Keyboard 

        row: { 
            maxWidth: '100%', //Establece el ancho máximo del elemento al 100% del ancho del contenedor padre
            flexDirection: "row", //Establece la dirección principal de los elementos flexibles en el contenedor a lo largo de una fila horizontal.
        },
        viewBottom: {
            position: 'absolute',
            bottom: 50,
        },
        screenFirstNumber: { // Estilo grande para los resultados de la operación e
            fontSize: 76,
            color: myColors.gray,
            fontWeight: '200',
            alignSelf: "flex-end",
        },
        
        screenSecondNumber: { // Estilo pequeño para los resultados de la operación
            fontSize: 40,
            color: myColors.gray,
            fontWeight: '200',
            alignSelf: "flex-end",
        },
        resultTextLight: { // Estilo del texto del resultado en modo claro
            fontSize: 40,
            color: myColors.black,
            fontWeight: '200',
            alignSelf: "flex-end",
        },
        resultTextDark: { // Estilo del texto del resultado en modo oscuro
            fontSize: 40,
            color: myColors.white,
            fontWeight: '200',
            alignSelf: "flex-end",
        },

        //display
        errorMessage: {
            color: 'red',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center', 
          
        },
            // quiero cntrarlo en el medio en el eje vertical

        viewDisplay: {
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
        },
    });