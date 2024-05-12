import { useContext, ReactNode } from "react"; // Este hock me permite acceder a un contexto
import { TouchableOpacity, Text } from "react-native"; // TouchableOpacity para que el botón tenga un efecto de presión y Text para mostrar el texto del botón
import { ThemeContext } from "../context/ThemeContext"; // Importo el contexto ThemeContext
import { Styles } from "../styles/GlobalStyles"; // Importo los estilos globales

// Se crea una interfaz para definir las propiedades del componente Button

interface ButtonProps {
    onPress: () => void;
    title?: string;
    isBlue?: boolean;
    isGray?: boolean;
    isRed?: boolean;
    children?: ReactNode; // Añade esta línea
}

// Se crea el componente Button que recibe las propiedades definidas en la interfaz ButtonProps
// Se crea el componente Button que recibe las propiedades definidas en la interfaz ButtonProps
export default function Button({ onPress, title, isBlue, isGray, children, isRed }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : isRed
                ? Styles.btnRed
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            {children}
                    {title && <Text 
                       style={
                           isBlue || isGray || isRed
                           ? Styles.smallTextLight
                           : theme === "dark" 
                           ? Styles.smallTextLight 
                           : Styles.smallTextDark 
                        }
                    >
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    );
}
