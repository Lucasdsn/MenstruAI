// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './HomeScreen';
import ResultsScreen from './ResultsScreen';
import CameraScreen from './CameraScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState([
    { id: '2', title: '14/11/2023' },
    { id: '1', title: '12/12/2023' },
    { id: '2', title: '15/01/2024' },
    // Add more initial data as needed
  ]);

  const addNewItem = (newItem) => {
    setData([...data, newItem]);
  };

  const onDelete = (itemId) => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Results"
          options={{ title: 'Results' }}
        >
          {(props) => <ResultsScreen {...props} data={data} onDelete={onDelete} />}
        </Stack.Screen>
        <Stack.Screen
          name="Camera"
          options={{ title: 'Camera' }}
        >
          {(props) => <CameraScreen {...props} addNewItem={addNewItem} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}