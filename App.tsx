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
        <View style={[styles.switchContainer]}> {/* Contenedor del switch*/}          
        <TouchableOpacity style={{flexDirection: 'row'}}  activeOpacity={1} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}> {/* Botón que cambia el tema*/}
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size={24} color={theme === 'dark' ? myColors.yellow : myColors.yellow} /> {/* Icono que cambia dependiendo del tema*/}
            <Text style={theme === 'dark' ? [styles.darkMode, {color: 'white'}] : styles.darkMode}>
              {theme === 'light' ? 'Activar DarkMode' : 'Activar LightMode'} {/* Texto que cambia dependiendo del tema*/}
            </Text>
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
    marginTop: 40, // Margen superior
    width: '100%', // Ancho
    flexDirection: 'row', // Dirección de los elementos
  },
  keyboardContainer: {
    flex: 1, // Para que ocupe todo el espacio disponible
    alignItems: 'center', // Alineación horizontal
    justifyContent: 'center', // Alineación vertical
  },
  darkMode:{
    fontSize: 20,
    marginLeft: 15,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'black',

       

  }
});