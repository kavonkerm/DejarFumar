// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quit Smoking App</Text>
      <Button title="Registrar" onPress={() => navigation.navigate('Registrar')} />
      <Button title="Registrar cigarrillos" onPress={() => navigation.navigate('Registrar cigarrillos')} />
      <Button title="Ver estadísticas" onPress={() => navigation.navigate('Estadísticas')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
