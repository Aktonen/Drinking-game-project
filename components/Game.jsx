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

  let fullHeight = Dimensions.get('window').height; // Full height
  let fullWidth = Dimensions.get('window').width; // Full height

  useEffect(() => {
    // Start animation when page loaded
    // startAnimation();

    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      if (cardText === null) {
        const randomCardText = getRandomCardText();
        setCardText(randomCardText);
      }
    };

    fetchRandomImage();
  }, [cardArray]); // eslint-disable-line react-hooks/exhaustive-deps


  // This is the animation for the beer container
  // TODO - Run the animation when the page is first loaded. We have to not run the card animation when the page is first loaded

  // const heightValue = useSharedValue(fullHeight);

  // const startAnimation = () => {
  //   heightValue.value = withTiming(0, { duration: 2000 }); // Animate to a height of 300
  // };

  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     height: heightValue.value,
  //   };
  // });

  // This is the animation for the card
  const xCoord = useSharedValue(fullWidth);

  const startCardAnimation = () => {
    // Reset the position to initial value
    xCoord.value = fullWidth;

    // Start the animation to move the card to the final position
    xCoord.value = withTiming(0, { duration: 1000 });
  };

  const cardAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xCoord.value }],
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

    // Extract the card text at the random index
    const randomCardText = tempCardArray[randomIndex];

    // Remove the card from the array
    tempCardArray.splice(randomIndex, 1);

    // Update the cardText state
    setCardText(randomCardText);
    setCardArray(tempCardArray);

    // Start the card animation
    startCardAnimation();

    // Return the randomly selected card text
    return randomCardText;
  }

  function getCardProperties(type) {
    switch (type) {
      case 'category':
        return { title: 'Category', style: styles.cardsCategory };
      case 'you-choose':
        return { title: 'You-choose!', style: styles.cardsYouchoose };
      case 'urgent':
        return { title: 'Urgent!', style: styles.cardsUrgent };
      case 'waterfall':
        return { title: 'Waterfall', style: styles.cardsWaterfall };
      default:
        return { title: '', style: {} };
    }
  }

  function getCardAssignment(type, assigned) {

    const oneRoundNumber = players.length;

    if (type === 'one-round') {
      switch (assigned) {
        case 'everyone':
          return { counter: oneRoundNumber };
        case 'player':
        case 'tallest':
        case 'shortest':
          return { assignedPlayer: players[playerTurn].name, counter: oneRoundNumber };
        default:
          return { assignedPlayer: '', counter: '' };
      }
    } else {
      return { assignedPlayer: '', counter: '' };
    }
  }


  const navigation = useNavigation();

  return (
    <>
      <View style={{ backgroundColor: players[playerTurn].color }}>
        <PlayersListGame
          players={players}
          playerTurn={playerTurn}
          color={players[playerTurn].color}
        />
        {/* <Text style={[styles.cardAssignedPlayer, { backgroundColor: 'red' }]}>
          {getCardAssignment(cardText.type, cardText.assigned).assignedPlayer}
          {getCardAssignment(cardText.type, cardText.assigned).counter}
        </Text> */}
        <Animated.View style={[styles.gameScreen, cardAnimatedStyles, { backgroundColor: players[playerTurn].color }]}>
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
        </Animated.View>
      </View >
    </>
  );
}
