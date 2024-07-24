// CameraScreen.js
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera'; //legacy

export default function CameraScreen({ navigation, addNewItem }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  const resetCamera = () => {
    setCapturedImage(null);
  };

  const analyseTest = () => {
    if (capturedImage) {
      const newItem = {
        id: (Math.random() * 1000000).toString(),
        title: new Date().toLocaleDateString(),
        imageUri: capturedImage,
      };
      addNewItem(newItem);
      setCapturedImage(null); // Reset capturedImage after adding a new item
      navigation.navigate('Results'); // Navigate to ResultsScreen after adding a new item
    }
  };

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedImage }} style={styles.previewImage} />
          <TouchableOpacity style={styles.resetButton} onPress={resetCamera}>
            <Text style={styles.resetButtonText}>Retake Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.analyseButton} onPress={analyseTest}>
            <Text style={styles.analyseButtonText}>Analysis</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Camera style={styles.camera} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.buttonText}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff99cc',
    padding: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'Arial',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#ff99cc',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  analyseButton: {
    backgroundColor: '#ff99cc',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  analyseButtonText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});
