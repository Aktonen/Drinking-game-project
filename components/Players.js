import React, { useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const AddPlayer = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState('');
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['green', 'blue', 'red', 'orange', 'brown'];

  const addPlayer = async () => {
    try {
      const storedPlayers = await AsyncStorage.getItem('players') || '[]';
      const players = JSON.parse(storedPlayers);

      // Create new player object with color
      const newPlayer = { name: playerName, color: colors[colorIndex] };

      players.push(newPlayer);
      await AsyncStorage.setItem('players', JSON.stringify(players));

      // Update colorIndex (cycle through colors)
      setColorIndex((colorIndex + 1) % colors.length);

      setPlayers(players); // Update state after changes
      setPlayerName(''); // Clear input
    } catch (error) {
      console.error(error);
    }
  };

  // const clearLocalStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log('Local storage cleared!');
  //   } catch (error) {
  //     console.error('Error clearing local storage:', error);
  //   }
  // };

  return (
    <>
      <TextInput
        value={playerName}
        onChangeText={setPlayerName}
        placeholder="Enter player name"
        textAlign="center"
      />
      <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' }, styles.startButton]}
        onPress={addPlayer}>
        {({ pressed }) => (
          <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Add player</Text>
        )}
      </Pressable>
      {/* <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' },
        styles.startButton]}
        onPress={clearLocalStorage}
      >
        {({ pressed }) => (
          <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Clear players</Text>
        )}
      </Pressable> */}
    </>
  );
};

export default AddPlayer;
