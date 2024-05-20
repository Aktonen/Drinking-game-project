/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const AddPlayer = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const [playerNumber, setPlayerNumber] = useState(0);
  const [inputError, setInputError] = useState(false);

  const colors = ['#f7524d', '#f7a84d', '#f1f74d', '#8acf36', '#47ffc2', '#4759ff', '#ac47ff', '#ff47e6'];

  useEffect(() => {
    if (players.length > 0) {
      setPlayerNumber(players.length);
      setColorIndex(players.length % colors.length);
    }
  }, [players]); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO - The indexing and playerturn is not working as expected. Fix this.
  // Two people can still have the same 'turn' in the game
  const addPlayer = async () => {
    if (playerName !== '') {
      try {
        const storedPlayers = await AsyncStorage.getItem('players') || '[]';
        const players = JSON.parse(storedPlayers);

        // Create new player object with color
        const newPlayer = { index: playerNumber, name: playerName, color: colors[colorIndex] };

        players.push(newPlayer);
        await AsyncStorage.setItem('players', JSON.stringify(players));

        setPlayers(players); // Update state after changes
        setPlayerName(''); // Clear input
      } catch (error) {
        console.error(error);
      }
    } else {
      setInputError(true);
    }
  };

  // TODO - Make an animated view for the error and shake the input field
  // Mayde like this, error ? <Animated.View> <TextInput> : <View> <TextInput>
  return (
    <>
      <TextInput
        style={[styles.textInput, { borderWidth: inputError ? 2 : 0 }]} // The borderColor is red. If there is an error show the border
        value={playerName}
        onChangeText={setPlayerName}
        placeholderTextColor={inputError ? 'red' : 'white'} // Change placeholder text color to red if there is an error
        placeholder="Enter player name"
        textAlign="center"
        autoFocus={false}
        onFocus={() => setInputError(false)}
      />
      <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : '#ffbc3e' }, styles.startButton]}
        onPress={addPlayer}>
        <Text style={styles.buttonText}>Add player</Text>
      </Pressable>
    </>
  );
};

export default AddPlayer;
