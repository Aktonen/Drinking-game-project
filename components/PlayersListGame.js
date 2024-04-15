import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/styles';
import { v4 as uuidv4 } from 'uuid';

const PlayersListGame = ({ players }) => {

  const renderPlayer = ({ item }) => {

    return (
      <View style={[styles.playerNameWrapper, { backgroundColor: item.color }]}>
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
