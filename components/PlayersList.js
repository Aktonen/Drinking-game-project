import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayersList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const storedPlayers = await AsyncStorage.getItem('players');
        if (storedPlayers) {
          setPlayers(JSON.parse(storedPlayers));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadPlayers();
  }, []);

  const renderPlayer = ({ item }) => (
    <Text style={{ marginRight: 10 }}>{item}</Text>
  );

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FlatList
        horizontal
        data={players}
        renderItem={renderPlayer}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default PlayersList;

