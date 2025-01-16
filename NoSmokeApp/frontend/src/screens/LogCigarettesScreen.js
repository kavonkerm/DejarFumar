import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

export default function LogCigarettesScreen() {
  const [cigarettes, setCigarettes] = useState('');
  const [message, setMessage] = useState('');

  // Función para guardar los cigarrillos fumados en AsyncStorage
  const logCigarettes = async () => {
    if (!cigarettes || isNaN(cigarettes) || cigarettes <= 0) {
      setMessage('Por favor ingresa una cantidad válida.');
      return;
    }
    
    try {
      // Obtener la fecha actual
      const date = new Date().toLocaleDateString();

      // Crear el objeto de datos del día
      const newData = { date, cigarettes: parseInt(cigarettes) };

      // Obtener los datos previos desde AsyncStorage
      const previousData = await AsyncStorage.getItem('cigarettesData');
      const data = previousData ? JSON.parse(previousData) : [];

      // Agregar los nuevos datos
      data.push(newData);

      // Guardar los datos actualizados en AsyncStorage
      await AsyncStorage.setItem('cigarettesData', JSON.stringify(data));
      
      setMessage(`Registro guardado: ${cigarettes} cigarrillos`);
      setCigarettes('');
    } catch (error) {
      setMessage('Error al guardar los datos. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registra tus cigarrillos fumados</Text>
      <TextInput
        style={styles.input}
        placeholder="Cantidad de cigarrillos"
        keyboardType="numeric"
        value={cigarettes}
        onChangeText={setCigarettes}
      />
      <Button title="Registrar" onPress={logCigarettes} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
});
