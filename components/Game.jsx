/* eslint-disable quotes*/
import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../styles/styles';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayersListGame from './PlayersListGame';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Game({ players }) {


  const IMAGES = [
    "Drink something you haven't drunk today",
    'Everyone offer you their drink. You choose which on to take a drink from',
    'Category. Capital cities',
    'The floor is lava, Anyone who touches the floor for one round must drink',
    '90s kids drink',
    '00s babies drink',
    "Ask the player to the left of you a science question, If they are correct you drink if not they drink.If you don't come up with a question. You drink",
    'Everyone wearing glasses must drink',
    'Category.Countries in Asia',
    'Fists of Five.On the count of three.All players show a number on their hand from 1 on to five.Number with the most people drink',
    'Silence! Stay silent for one round.Everytime you speak drink',
    'Decisions.Pizza or burger ? The side with the least people drink',
    'Anyone who claims they are not drunk must drink',
    'Most likely. Who is the most likely to pass out tonight?',
    'Pick a player to drink with you',
    'Blue eyed players drink',
    'Anyone who has eaten during this game must drink',
    'Take some of the drink from the player on your right and it into your drink',
    'Brunettes drink',
    'Close your eyes and the player on your right must give you a mystery drink.If you can guess what it is the person must also drink it',
    'Category.Car brands',
    'Pick three players to drink',
    'Fill up your drink',
    'The last person to raise their drink must take a drink',
    "Drink if it's past midnight",
    'Hug any player',
    'Seven.Go clockwise counting up from 1. But no player can say a multiple of 7 or a number with 7 in it.Players must replace those numbers with the word "drink" and the direction changes.First player to mess up must drink',
    'Females drink',
    "Everyone must read their last text out loud or drink",
    "Drink if English isn't your native language",
    "You must say the date of birth of the player on your right.If you're correct they drink. If you're wrong you drink",
    'You and the player on your left say your favourite movies.The rest of the players vote which movie is the worst.The loser must drink',
    "Choose head or tails.If you're correct everyone else drinks. If you are wrong you drink",
    'Smokers drink',
    'Rule.You can create a rule that players must follow or drink.For example: "Players must stand up to drink"',
    'Ayone born in summer drink',
    'Truth or dare.Choose which one and the other players come up with the question or task',
    'Drink if you have a piercing',
    'Unemployed players drink',
    'You choose.Choose a player who has the nicest smile.They must drink',
    'The player with the shortest hair must drink',
    'EVERYONE STAND UP.The last person standing must drink',
    'Going to the bar.Start with "I am going to the bar and i am going to buy..." Go clockwise and add a beverage to the sentence.First person to repeat or does not come up with a beverage must drink',
    'You choose.Choose a player with the nicest eyes.They must drink',
    'Everyone vote who the most sober player is.They must drink',
    'The next player who wants to leave the table or room must finish their drink',
    '2 Truths 1 lie.Tell everyone two truths and one lie.Players must guess which on is a lie.Everyone who is wrong must drink',
    'Take a drink without using your hands',
    'Insult the player in front of you',
    'If there are more females than males then females must drink. If there are more males than females then males must drink',
    'Drink twice',
    'Everyone must compliment your or drink',
    'Decisions.Tea or coffee? The side with the least people drink',
    'The player with the largest ears must drink',
    "Do 10 push ups.If you can't then drink",
    'Everyone ignore this player for one round',
    'Every player must make an animal noise or drink',
    'The player opposite of you must drink',
    'Use only your left hand for one round',
    'Player to your right drinks',
    'Everyone who has taken a picture tonight must drink',
    'High five the player to your left and then both take a drink',
    'Stand on one leg and drink',
    'All single people must drink',
    'You choose.Choose a player that smells the nicest.They must drink',
    'Cat owners drink',
    'For one round if anyone checks their phone they must drink',
    'Drink',
    'Compliment the person on your left',
    "Say a statement about yourself.It can be true or a lie.Other players must collectively decide if it's the truth or a lie. If they are incorrect they must drink. If they are correct you must drink",
    'Any player who has spilt a drink tonight must drink',
    'You choose.Choose which two players look the most alike.They must both drink',
    'Drink for every sibling you have',
    'Anyone who has cried in the last month must drink in sorrow',
    'Hairiest player drinks',
    "Drink if you've ever been in a physical fight",
    'Category.Music genres',
    'Everyone vote who the smartest player is.They must drink',
    'Try to walk in a straight line.If you fail then you must drink',
    'You choose.Choose who is the best dressed. They must drink',
    'If you are drinking someone elses drink, or someone paid for your drink. Thank them and take a drink',
    'fi yuo cna raed tihs tehn dinrk',
    'Everyone stand on one leg.The first player to fall must drink',
    'Have a staring contest with the player in front of you.The loser must drink',
    'The player with the longest hair must drink',
    'The most formally dressed person must drink',
    'Category.You choose the category',
    "Anyone on their phone right now must drink.This card doesn't count",
    'Anyone with a one syllable name must drink',
    'Anyone drinking a vodka based drink must drink',
    'The person with the biggest... Hands must take a drink',
    'Everyone pass their drink to their left and let them take a drink',
    'Have a thumb war with the player on your right.The loser must drink',
    'Anyone with a tattoo must drink',
    'The drunkest player must drink water',
    'Category.Beatles songs',
    'The player with the biggest nose must drink',
    'Pick two most descriptive adjectives of the player on your right and then both drink',
    'The player on your right must drink',
    '"Hello my name is".Any players that met you today must drink',
    "If you can name the song playing right now you can choose someone to drink.If there's no music then you must drink",
    'Anyone who owns an Apple product must drink',
    '1 - 2 - 3...You must drink once and then going clockwise the next person must drink twice.Next person 3 times.Continue until it comes back to you',
    'Waterfall. Everyone start chugging your drink.You are the first person who can stop drinking. After that the person on your left can stop.Then the person on their left. Go until everyone has stopped',
    'Drink if you have been single for 6 months or more',
    'Touch your toes standing up.Without bending your legs or take a drink',
    'Drink for every letter in your name',
    'Wine drinkers must drink',
    'Everyone put their hands up in the air.The last to do so must drink',
    'Hum a song.The first player to guess the song can choose someone to drink',
    'The most pale player must drink',
    'Choose a player.Everyone but you two must drink',
    'The player who has travelled to the most countries must drink',
    "Quote a movie.If the player on your right can't guess the movie they must drink",
    "Waterfall but easier.All players start chugging their drink and can't stop until you stop",
    'Category. Movie genres',
    'Turn away from other players. One person must tap your shoulder. If you guess correctly everybody else drinks. If you guess incorrectly you must drink',
    'Starting from you.Go clockwise complimenting eachother',
    'Rule.You can create a rule that players must follow or drink.For example: Players must only use their left hand',
    'Just drink',
    'The player with the straightest teeth must drink',
    'Any players waring makeup must drink',
    'Everyone must drink double for one round',
    'Take a drink from the player on your right and left',
    'Dog owners drink',
    'Do something to the player on your left.For example touch them on the nose.They must do that and add one more thing.Keep going round clockwise adding steps until someone forgets.The loser must drink',
    'Tilt your head all the way back and take a drink',
    "Drink if you can't remember your last card",
    'Anyone who has dyed their hair must drink',
    'Play on round of never have I ever',
    'All players with the same drink as you must drink',
    'Question master.For 3 rounds if anyone answers your question they must drink.No question about the game itself',
    'Play rock paper scissors with the player on your right. Loser drinks',
    'Pick two players. The have to kiss eachother or both take a drink',
    'Say five words starting with the letter "L" in five seconds or drink',
    'Think of a number between 1 and 10. Other players must go clockwise guessing the number.The player who gets it correct can choose someone to drink',
    "You can't tell the truth for one round. Drink if anyone catches you telling the truth",
    'The next person to make eye contact with you must drink',
    'Close your eyes for one round',
    'Tell everyone your favourite hobby and then drink',
    'Category. Natural disasters',
    'Drink for everyone country you have visited',
    'Drink if you have kissed one of the other players',
    'Do a dance or take a drink',
    'Tell everyone your favourite book and then drink',
    'Everyone try to call you. The first person to succeed can choose someone to drink',
    "The player on your left must tell you a joke. You must decide if it's good. If it's not they must drink",
    'Take off a piece of clothing or drink',
    'Anyone drinking beer must drink',
    'Kiss the player on your left or take a drink',
    'You must hold hands with the player on your right for one round',
    'Vegetarians drink',
    'You choose.Choose a word that is banned for two rounds.If anyone says this word they must drink',
    'If your drink is mixed then take a drink',
    'Everyone must touch a wall.The last person to do so must drink',
    'Call someone and tell them you love them',
    'The player with the weakest drink must take a drink',
    'Category. Fruits',
    'Category. US presidents',
    'Tell everyone where and how you met the player on your right',
    'Whoever is wearing the skinniest jeans must drink',
    'Category.Countries in Europe',
    'Spin a bottle and whoever it lands on must drink',
    'The player with the most cash on them must drink',
    'Most buff player must drink',
    'Tell everyone your biggest fear and then drink',
    'Everyone vote who has the best haircut.The player with the most votes must drink',
    'Take a selfie with the player on your left and then both drink',
    'Decisions.Cats or dogs.The side with the least people drink',
    'Tell everyone your guilty pleasure',
    'Everyone say their favourite colour. Any players that have the same colour must drink',
    "Rule. You can create a rule that players must follow or drink. For example: Don't look at your phone",
    'The player on your left must find something and bring it to you as a gift',
    'Players with brown eyes must drink',
    'Oldest player drinks',
    'Drink three times',
    'Starting with you and going clockwise count to 21. You can either say one.two or three numbers.The person who has to say 21 must drink',
    "Drum a beat on the table.If the player on your left can't repeat it they must drink",
    "You can't swear for three rounds. Everytime you swear take a drink",
    'Everyone look at the ground and on the count of three look up and look at another players eyes.Any players making eye contact with eachother must drink',
    'You have to drink double for one round',
    'The tallest player must stand up for one round',
    'Redheads drink',
    'Blondes drink',
    'Lie on your back and drink',
    'The youngest player must drink',
    'The shortest player must sit on the floor for one round',
    'Everyone drink',
    'If this is your first time playing intoxi - deck you must drink',
    'Anyone with a 9 - 5 job must drink',
    "Do whatevery the player on your right does.If you can't then drink",
    'Ask the player on your left a general knowledge question.If they are correct then you must drink.If the are wrong they must drink',
    'Give the player on your left a shoulder massage or drink',
    'Say the alphabet backwards. If you fail you must drink',
    'Category. Dog breeds',
    "Go round clockwise saying everyones full names.If you can't then you must drink",
    'The player you have known the longest must drink',
    'Everyone touch the floor with their hand.The last to do so must drink',
    'Everyone raise their drinks and say cheers!',
    'You must only whisper until your next turn',
    "Touch the ceiling.You can't use chairs or tables etc. If you can't then drink",
    'Anyone wearing lipstick must drink',
    'If you enjoy the taste of your drink then take a drink',
    'Anyone born in winter must drink',
    'Rhyme. Choose a word and go round clockwise saying words that rhyme with that word. The first person to fail must drink',
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
      <PlayersListGame
        players={players}
        playerTurn={playerTurn}
        color={players[playerTurn].color}
      />
      <View style={[styles.gameScreen, { backgroundColor: players[playerTurn].color }]}>
        {imageUri ? (
          // <Image source={{ uri: imageUri }} style={styles.gameImage} />
          <TouchableOpacity onPress={() => {
            getRandomImageUri();
            changeTurn();
          }}>
            <View style={styles.cardPressable}>
              <Text>{imageUri}</Text>
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
              <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Restart game</Text>
            )}
          </Pressable>
        )}
      </View>
    </>
  );
}
