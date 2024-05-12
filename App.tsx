import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'; // Importo el contexto ThemeContext
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import Keyboard from './src/components/Keyboard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



export default function App() {
  
  const [theme, setTheme] = useState('dark') // Creo un estado local para el tema
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView  style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
        <StatusBar style="auto" />
        <View style={styles.switchContainer}>          
        <TouchableOpacity activeOpacity={1} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} size={24} color={theme === 'dark' ? myColors.white : myColors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardContainer}>
          <Keyboard />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Para que ocupe todo el espacio disponible
    backgroundColor: myColors.light,
    justifyContent: 'flex-start',
  },
  switchContainer: {
    alignSelf: 'flex-start',
    padding: 10,
    marginTop: 40
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});