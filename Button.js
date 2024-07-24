// Button.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff99cc',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Arial', // Specify your custom font family
    fontWeight: '',
  },
});
