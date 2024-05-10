import { useContext } from "react"; // Este hock me permite acceder a un contexto
import { TouchableOpacity, Text } from "react-native"; // TouchableOpacity para que el botón tenga un efecto de presión y Text para mostrar el texto del botón
import { ThemeContext } from "../context/ThemeContext"; // Importo el contexto ThemeContext
import { Styles } from "../styles/GlobalStyles"; // Importo los estilos globales

// Se crea una interfaz para definir las propiedades del componente Button

interface ButtonProps {
    onPress: () => void; // Función que se ejecutará al presionar el botón
    title: string; // Texto que mostrará el botón
    isBlue?: boolean; // Propiedad opcional para definir si el botón será azul
    isGray?: boolean; // Propiedad opcional para definir si el botón será gris
}

// Se crea el componente Button que recibe las propiedades definidas en la interfaz ButtonProps
export default function Button({ onPress, title, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}