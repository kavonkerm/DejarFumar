import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/log-cigarette', { state });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error al registrar.');
    }
  };

  return (
    <View>
      <Text>Registra tu cigarro:</Text>
      <TextInput
        placeholder="Estado de ánimo"
        value={state}
        onChangeText={setState}
      />
      <Button title="Registrar" onPress={handleSubmit} />
      <Text>{message}</Text>
    </View>
  );
};

export default App;

