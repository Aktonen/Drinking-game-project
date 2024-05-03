import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';
import styles from '../styles/styles';

import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import PlayersListGame from './PlayersListGame';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CARDS from '../assets/Cards';

export default function Game({ players }) {

  const [cardText, setCardText] = useState(null);
  const [cardArray, setCardArray] = useState(CARDS);
  const [playerTurn, setPlayerTurn] = useState(0);

  let fullHeight = Dimensions.get('window').height; //full height

  useEffect(() => {
    // Start animation when page loaded
    startAnimation();

    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      if (cardText === null) {
        const randomCardText = getRandomCardText();
        setCardText(randomCardText);
      }
    };

    fetchRandomImage();
  }, [cardArray]); // eslint-disable-line react-hooks/exhaustive-deps


  const heightValue = useSharedValue(fullHeight);

  const startAnimation = () => {
    heightValue.value = withTiming(0, { duration: 2000 }); // Animate to a height of 300
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });

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
    const randomIndex = Math.floor(Math.random() * tempCardArray.length);

    // Extract the image URI at the random index
    const randomCardText = tempCardArray[randomIndex];

    // Remove the image from the array
    tempCardArray.splice(randomIndex, 1);

    // Update the cardText state
    setCardText(randomCardText);
    setCardArray(tempCardArray);

    // Return the randomly selected image URI
    return randomCardText;
  }

  function getCardProperties(type) {
    switch (type) {
      case 'category':
        return { title: 'Category', style: {} };
      case 'you-choose':
        return { title: 'You-choose', style: {} };
      case 'urgent':
        return { title: 'Urgent', style: { color: 'red', textTransform: 'uppercase' } };
      case 'waterfall':
        return { title: 'Waterfall', style: {} };
      default:
        return { title: '', style: {} };
    }
  }

  const navigation = useNavigation();

  return (
    <>
      <Animated.View style={[styles.beerContainer, animatedStyles]} />
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
              <Text style={[styles.cardTitle, getCardProperties(cardText.type).style]}>
                {getCardProperties(cardText.type).title}
              </Text>
              <Text style={styles.gameText}>{cardText.text}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' },
            styles.startButton]}
            onPress={() => {
              navigation.goBack();
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
