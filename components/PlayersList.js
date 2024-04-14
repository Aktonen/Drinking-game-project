import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/styles';
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
        <Text style={styles.playerName}>{item}</Text>
        <Icon.Button
          style={styles.playerNameButton}
          name="delete"
          backgroundColor="#ffbc3e"
          onPress={handleDeletePlayer}
          color="red"
          fontWeight="100"
        />
      </View>
    );
  };

  return (
    <View style={styles.flatListWrapper}>
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
