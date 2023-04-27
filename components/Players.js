import React, { useState } from 'react';
import { TextInput, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState('');

  const addPlayer = async () => {
    try {
      const players = JSON.parse(await AsyncStorage.getItem('players')) || [];
      players.push(playerName);
      await AsyncStorage.setItem('players', JSON.stringify(players));
      setPlayerName('');
      console.log(players)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TextInput
        value={playerName}
        onChangeText={setPlayerName}
        placeholder="Enter player name"
        textAlign='center'
      />
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' }, styles.startButton ]}
        onPress={addPlayer}>
        {({ pressed }) => (
        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Add player</Text>
          )}
      </Pressable>
    </>
  );
};

export default AddPlayer;
