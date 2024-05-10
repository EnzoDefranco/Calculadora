import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'; // Importo el contexto ThemeContext
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';


export default function App() {
  const [theme, setTheme] = useState('blue') // Creo un estado local para el tema
  return (
    // Envuelvo la aplicación en el contexto ThemeContext.Provider para que todos los componentes hijos puedan acceder al valor del tema
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} // Cambio el tema al opuesto
      />
      <Button  title='22' onPress={() => alert("Hello")} />
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
