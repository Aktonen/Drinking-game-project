import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayersList = ({ players, setPlayers }) => {
  const renderPlayer = ({ item }) => {
    const handleDeletePlayer = async () => {
      const newPlayers = players.filter((player) => player !== item);
      try {
        await AsyncStorage.setItem('players', JSON.stringify(newPlayers));
        setPlayers(newPlayers);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>{item}</Text>
        <TouchableOpacity onPress={handleDeletePlayer}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FlatList
        horizontal
        data={players}
        renderItem={renderPlayer}
        keyExtractor={(item) => uuidv4()}
      />
    </View>
  );
};

export default PlayersList;
