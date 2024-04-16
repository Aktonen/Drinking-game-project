import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayersListGame from './PlayersListGame';

export default function Game({ players }) {

  // These have to be changed if the app is published
  const IMAGES = [
    'http://192.168.0.105:8081/images/Category_dogs.jpg',
    'http://192.168.0.105:8081/images/Lie_on_your_back.jpg',
    'http://192.168.0.105:8081/images/Old_friends.jpg',
    'http://192.168.0.105:8081/images/Piercing.jpg',
    'http://192.168.0.105:8081/images/Tell_a_joke.png',
  ];

  const [imageUri, setImageUri] = useState(null);
  const [imageArray, setImageArray] = useState(IMAGES);
  const [playerTurn, setPlayerTurn] = useState(0);

  useEffect(() => {
    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      const randomImageUri = getRandomImageUri(); //eslint-disable-line
      setImageUri(randomImageUri);
    };

    fetchRandomImage();
  }, [imageArray]); // eslint-disable-line

  // This function gives us a when changing cards
  // We use this to indicate whos turn it is in the playersListGame component
  function changeTurn() {

    if (playerTurn >= players.length - 1) {
      setPlayerTurn(0);
    } else {
      setPlayerTurn(playerTurn + 1);
    }
  }

  function getRandomImageUri() {

    const tempImageArray = [...imageArray];

    if (tempImageArray.length === 0) {
      // Handle the case where the array is empty (e.g., all images displayed)
      setImageArray(IMAGES);
    }

    // Get a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    // Extract the image URI at the random index
    const imageUri = imageArray[randomIndex];

    // Remove the image from the array
    imageArray.splice(randomIndex, 1);

    // Update the imageUri state
    setImageUri(imageUri);
    setImageArray(imageArray);

    // Return the randomly selected image URI
    return imageUri;
  }

  const clearLocalStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Local storage cleared!');
    } catch (error) {
      console.error('Error clearing local storage:', error);
    }
  };

  const navigation = useNavigation();

  return (
    <>
      <PlayersListGame players={players} playerTurn={playerTurn} />
      <View style={styles.gameScreen}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.gameImage} />
        ) : (
          <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' },
            styles.startButton]}
            onPress={() => {
              navigation.goBack();
              clearLocalStorage();
            }}
          >
            {({ pressed }) => (
              <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Restart game</Text>
            )}
          </Pressable>
        )}
        <Pressable style={[styles.gameArrow, styles.gameArrowRight]} onPress={() => {
          getRandomImageUri();
          changeTurn();
        }}>
          <Icon name="arrowright" size={100} color="white" />
        </Pressable>
        <Pressable style={[styles.gameArrow, styles.gameArrowLeft]}>
          <Icon name="arrowleft" size={100} color="white" />
        </Pressable>
      </View>
    </>
  );
}
