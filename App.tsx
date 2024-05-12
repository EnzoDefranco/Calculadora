import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'; // Importo el contexto ThemeContext
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import Keyboard from './src/components/Keyboard';


export default function App() {
  const [theme, setTheme] = useState('dark') // Creo un estado local para el tema
  return (
    // Envuelvo la aplicación en el contexto ThemeContext.Provider para que todos los componentes hijos puedan acceder al valor del tema
    <ThemeContext.Provider value={theme}>
    <SafeAreaView  style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} // Cambio el tema al opuesto
      />
      <Keyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Para que ocupe todo el espacio disponible
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
