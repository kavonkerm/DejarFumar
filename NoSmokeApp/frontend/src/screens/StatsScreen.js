import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StatsScreen() {
  const [cigarettesData, setCigarettesData] = useState([]);

  useEffect(() => {
    const loadCigarettesData = async () => {
      try {
        const data = await AsyncStorage.getItem('cigarettesData');
        if (data) {
          setCigarettesData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    loadCigarettesData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de cigarrillos fumados</Text>
      <FlatList
        data={cigarettesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`Fecha: ${item.date} - ${item.cigarettes} cigarrillos`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
