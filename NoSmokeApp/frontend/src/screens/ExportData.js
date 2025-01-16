import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';  // Necesitas instalar expo-file-system

export default function ExportDataScreen() {
  const exportData = async () => {
    try {
      // Obtener los datos de AsyncStorage
      const data = await AsyncStorage.getItem('cigarettesData');
      if (data) {
        const parsedData = JSON.parse(data);

        // Crear un archivo JSON con los datos
        const fileUri = FileSystem.documentDirectory + 'cigarettes_data.json';
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(parsedData, null, 2));

        alert(`Datos exportados a: ${fileUri}`);
      } else {
        alert('No hay datos para exportar.');
      }
    } catch (error) {
      console.error('Error al exportar los datos:', error);
      alert('Hubo un error al exportar los datos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exportar Datos</Text>
      <Button title="Exportar a JSON" onPress={exportData} />
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
