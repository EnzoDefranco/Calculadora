import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'; // Importo el contexto ThemeContext
import { myColors } from './src/styles/Colors';
import Keyboard from './src/components/Keyboard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



export default function App() {
  
  const [theme, setTheme] = useState('light') // Creo un estado local para el tema
  return (
    <ThemeContext.Provider value={theme}> {/* Paso el valor del estado local a través del contexto ThemeContext*/}
      <SafeAreaView  style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}> {/* Cambio el color de fondo del contenedor dependiendo del tema*/} 
        <StatusBar style="auto" /> {/* Barra de estado de la aplicación*/}
        <View style={styles.switchContainer}> {/* Contenedor del switch*/}          
        <TouchableOpacity activeOpacity={1} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}> {/* Botón que cambia el tema*/}
            <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} size={24} color={theme === 'dark' ? myColors.white : myColors.black} /> {/* Icono que cambia dependiendo del tema*/}
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardContainer}> {/* Contenedor del teclado*/}
          <Keyboard /> {/* Componente Keyboard*/}
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Para que ocupe todo el espacio disponible
    backgroundColor: myColors.light, // Se establece el color de fondo light como predeterminado
    justifyContent: 'flex-start', // Alineación vertical
  },
  switchContainer: {
    alignSelf: 'flex-start', // Alineación horizontal
    padding: 10, // Espaciado
    marginTop: 40 // Margen superior
  },
  keyboardContainer: {
    flex: 1, // Para que ocupe todo el espacio disponible
    alignItems: 'center', // Alineación horizontal
    justifyContent: 'center', // Alineación vertical
  },
});