import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';
import styles from '../styles/styles';

import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import PlayersListGame from './PlayersListGame';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Svg, { Path } from 'react-native-svg';

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

    // Extract the card text at the random index
    const randomCardText = tempCardArray[randomIndex];

    // Remove the card from the array
    tempCardArray.splice(randomIndex, 1);

    // Update the cardText state
    setCardText(randomCardText);
    setCardArray(tempCardArray);

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

  const navigation = useNavigation();

  return (
    <>
      <Animated.View style={[styles.beerContainer, animatedStyles]}>
        {/* // This is the SVG that is not working */}
        {/* <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <Path fill="#ffffff" fillOpacity="1" d="M0,128L30,144C60,160,120,192,180,197.3C240,203,300,181,360,176C420,171,480,181,540,197.3C600,213,660,235,720,218.7C780,203,840,149,900,144C960,139,1020,181,1080,170.7C1140,160,1200,96,1260,96C1320,96,1380,160,1410,192L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
        </Svg> */}
      </Animated.View>
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
