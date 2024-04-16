import React from 'react';
import { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, View, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles/styles';
import AddPlayer from './components/Players';
import Game from './components/Game';
import PlayersList from './components/PlayersList';
import Background from './images/beer_background.jpeg';

function Home({ navigation }) {
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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.header}>
          <PlayersList players={players} setPlayers={setPlayers} />
        </View>
        <Text style={styles.title}>Intoxi-deck</Text>
        <View style={styles.handlePlayerContainer}>
          <AddPlayer players={players} setPlayers={setPlayers} />
        </View>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? 'green' : '#ffbc3e' },
            styles.startButton,
          ]}
          onPress={() => navigation.navigate('Game', { players })}
        >
          {({ pressed }) => (
            <Text
              style={[
                { color: pressed ? 'white' : 'black' },
                styles.buttonText,
              ]}
            >
              Start game
            </Text>
          )}
        </Pressable>
      </ImageBackground>
    </View>
  );
}


function MenuGame({ navigation, route }) {
  const players = route.params.players;

  return (
    <View style={styles.gameWrapper}>
      <Game players={players} />
      {/* <PlayersListGame></PlayersListGame> */}
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Game"
        component={MenuGame}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar hidden />
    </NavigationContainer>
  );
}
