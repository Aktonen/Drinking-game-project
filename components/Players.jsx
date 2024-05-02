import React, { useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const AddPlayer = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const [playerNumber, setPlayerNumber] = useState(0);

  const colors = ['#f7524d', '#f7a84d', '#c9c03c', '#5ef74d', '#4d58f7', '#b64df7'];

  const addPlayer = async () => {
    try {
      const storedPlayers = await AsyncStorage.getItem('players') || '[]';
      const players = JSON.parse(storedPlayers);

      // Create new player object with color
      const newPlayer = { index: playerNumber, name: playerName, color: colors[colorIndex] };

      players.push(newPlayer);
      await AsyncStorage.setItem('players', JSON.stringify(players));

      // Update playerNumber
      setPlayerNumber(playerNumber + 1);

      // Update colorIndex (cycle through colors)
      setColorIndex((colorIndex + 1) % colors.length);

      setPlayers(players); // Update state after changes
      setPlayerName(''); // Clear input
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TextInput
        style={styles.textInput}
        value={playerName}
        onChangeText={setPlayerName}
        placeholderTextColor={'white'}
        placeholder="Enter player name"
        textAlign="center"
      />
      <Pressable
        style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : '#ffbc3e' }, styles.startButton]}
        onPress={addPlayer}>
        {({ pressed }) => (
          <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Add player</Text>
        )}
      </Pressable>
    </>
  );
};

export default AddPlayer;
