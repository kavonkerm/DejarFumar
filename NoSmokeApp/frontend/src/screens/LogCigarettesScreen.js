import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

export default function LogCigarettesScreen() {
  const [cigarettes, setCigarettes] = useState('');
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');

  const moods = [
    'Ansioso', 
    'Molesto', 
    'Triste', 
    'Normal', 
    'Alegre', 
    'Hambriento', 
    'Cansado', 
    'Somnoliento', 
    'Dolor físico', 
    'Dificultad para respirar'
  ];

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
      
      setMessage(`Registro guardado: ${cigarettes} cigarrillos, Estado: ${mood}`);
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
      <Text style={styles.label}>Selecciona tu estado de ánimo</Text>
      <Picker
        selectedValue={mood}
        style={styles.picker}
        onValueChange={(itemValue) => setMood(itemValue)}>
        <Picker.Item label="Seleccione un estado" value="" />
        {moods.map((moodOption, index) => (
          <Picker.Item key={index} label={moodOption} value={moodOption} />
        ))}
      </Picker>

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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
});
