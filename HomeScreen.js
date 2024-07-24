// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleAnalysePress = () => {
    navigation.navigate('Camera');
  };

  const handleOpenResultsPress = () => {
    navigation.navigate('Results');
  };

  return (
    <ImageBackground source={require('./assets/Homescreen.png')} style={styles.backgroundImage}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAnalysePress}>
          <Text style={styles.buttonText}>Analyse a test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOpenResultsPress}>
          <Text style={styles.buttonText}>Open your results</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 400,
    height: 650,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  button: {
    backgroundColor: '#ff99cc',
    padding: 12,
    borderRadius: 15,
  },
  
  buttonText: {
    fontSize: 20
    ,
    color: 'black',
    fontFamily: 'Arial',
  },
});
