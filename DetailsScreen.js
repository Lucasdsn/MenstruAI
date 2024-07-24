// DetailsScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { item, onDelete } = route.params;

  const handleDelete = () => {
    onDelete(item.id);
    navigation.goBack(); // Go back to the previous screen after deleting
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Result of the day</Text>
      <Image
        source={{ uri: item.imageUri }} // Display the image from the item
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.label}>{item.title}</Text>
      <Text style={styles.description}>
        CEA concentration: <Text style={{ fontWeight: 'bold' }}>3.0 ng/mL</Text> {'\n\n'}
        CA-125 concentration: <Text style={{ fontWeight: 'bold' }}>20.0 U/mL</Text> {'\n\n'}
        CRP concentration: <Text style={{ fontWeight: 'bold' }}>4.0 µg/mL</Text> {'\n\n'}
        <Text style={{ fontWeight: 'bold' }}>Your protein levels seem normal</Text> {'\n\n'}
        The result of the test was sent to your general practitioner.
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  deleteButton: {
    backgroundColor: '#ff0000', // Red color for delete button
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  deleteButtonText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});