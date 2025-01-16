import React, { useState } from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CigaretteLogScreen = () => {
  const [cigarettes, setCigarettes] = useState('');
  const [mood, setMood] = useState('normal');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const handleLog = async () => {
    const user = auth().currentUser;
    if (user) {
      await firestore().collection('logs').add({
        userId: user.uid,
        cigarettes: parseInt(cigarettes),
        mood,
        date: date.toISOString(),
        time,
      });
      console.log('Registro guardado');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cantidad de cigarrillos fumados"
        keyboardType="numeric"
        value={cigarettes}
        onChangeText={setCigarettes}
        style={styles.input}
      />
      <Picker selectedValue={mood} onValueChange={setMood} style={styles.input}>
        <Picker.Item label="Ansioso" value="ansioso" />
        <Picker.Item label="Molesto" value="molesto" />
        <Picker.Item label="Triste" value="triste" />
        <Picker.Item label="Normal" value="normal" />
        <Picker.Item label="Alegre" value="alegre" />
        <Picker.Item label="Hambriento" value="hambriento" />
        <Picker.Item label="Cansado" value="cansado" />
        <Picker.Item label="Somnoliento" value="somnoliento" />
        <Picker.Item label="Dolor físico" value="dolor_fisico" />
        <Picker.Item label="Dificultad para respirar" value="dificultad_respirar" />
      </Picker>
      <Button title="Registrar cigarrillo" onPress={handleLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default CigaretteLogScreen;
