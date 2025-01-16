// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quit Smoking App</Text>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Log Cigarettes" onPress={() => navigation.navigate('Log Cigarettes')} />
      <Button title="View Stats" onPress={() => navigation.navigate('Stats')} />
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
