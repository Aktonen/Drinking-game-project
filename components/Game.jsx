import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../styles/styles';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayersListGame from './PlayersListGame';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CARDS from '../assets/Cards';

export default function Game({ players }) {

  const [cardText, setCardText] = useState(null);
  const [cardArray, setCardArray] = useState(CARDS);
  const [playerTurn, setPlayerTurn] = useState(0);

  useEffect(() => {
    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      const randomCardText = getRandomCardText();
      setCardText(randomCardText);
    };

    fetchRandomImage();
  }, [cardArray]); // eslint-disable-line react-hooks/exhaustive-deps

  // This function gives us a when changing cards
  // We use this to indicate whos turn it is in the playersListGame component
  function changeTurn() {

    if (playerTurn >= players.length - 1) {
      setPlayerTurn(0);
    } else {
      setPlayerTurn(playerTurn + 1);
    }
  }

  function getRandomCardText() {

    const tempCardArray = [...cardArray];

    if (tempCardArray.length === 0) {
      // Handle the case where the array is empty (e.g., all cards displayed)
      setCardArray(CARDS);
    }

    // Get a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * cardArray.length);

    // Extract the image URI at the random index
    const cardText = cardArray[randomIndex];

    // Remove the image from the array
    cardArray.splice(randomIndex, 1);

    // Update the cardText state
    setCardText(cardText);
    setCardArray(cardArray);

    // Return the randomly selected image URI
    return cardText;
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
      <PlayersListGame
        players={players}
        playerTurn={playerTurn}
        color={players[playerTurn].color}
      />
      <View style={[styles.gameScreen, { backgroundColor: players[playerTurn].color }]}>
        {cardText ? (
          <TouchableOpacity onPress={() => {
            getRandomCardText();
            changeTurn();
          }}>
            <View style={styles.cardPressable}>
              <Text style={styles.gameText}>{cardText.text}</Text>
            </View>
          </TouchableOpacity>
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
              <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Restart game</Text> // eslint-disable-line react-native/no-inline-styles
            )}
          </Pressable>
        )}
      </View>
    </>
  );
}