import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/styles';
import { v4 as uuidv4 } from 'uuid';

const PlayersListGame = ({ players, playerTurn }) => {

  const renderPlayer = ({ item }) => {

    // Get the active player
    const activePlayer = playerTurn === item.index;

    return (
      <View style={[styles.playerNameWrapperGame, { backgroundColor: activePlayer ? 'greenyellow' : item.color, borderColor: activePlayer ? 'greenyellow' : 'white' }]}>
        <Text style={styles.playerName}>{item.name}</Text>
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

export default PlayersListGame;
