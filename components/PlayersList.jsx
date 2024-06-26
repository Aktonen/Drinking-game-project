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
      <View style={[styles.playerNameWrapper, { backgroundColor: item.color }]}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Icon.Button
          style={styles.playerNameButton}
          name="delete"
          backgroundColor={item.color}
          onPress={handleDeletePlayer}
          color="white"
          fontWeight="100"
        />
      </View>
    );
  };

  // TODO - The flatlist behaves weirdly when it's not full screen width. Fix this.
  // Idea - make the flatlist full screen width and center the content
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
