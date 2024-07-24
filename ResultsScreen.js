// ResultsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResultsScreen({ route, data, onDelete }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { backgroundColor: '#ff99cc' },
      ]}
      onPress={() => navigateToDetails(item)}
    >
      <Text style={[styles.label, { fontFamily: 'Arial' }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { item, onDelete });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Results</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    alignItems: 'center',
  },
  item: {
    padding: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  label: {
    fontSize: 20,
    color: 'black',
  },
});
