import { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, View, Button, ScrollView } from 'react-native';

import styles from "./styles/styles";
import AddPlayer from './components/Players';
import Game from "./components/Game"
import PlayersList from './components/PlayersList';
import PlayersListGame from './components/PlayersListGame'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function Home({ navigation }) {
  const [players, setPlayers] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intoxi-deck</Text>
      <View style={styles.handlePlayerContainer}>
        <AddPlayer players={players} setPlayers={setPlayers}/>
      </View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'green' : 'blue' },
          styles.startButton,
        ]}
        onPress={() => navigation.navigate('Game')}
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
      <View style={styles.footer}>
        <PlayersList players={players}/>
      </View>
    </View>
  );
}


function MenuGame({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Game></Game>
      {/* <PlayersListGame></PlayersListGame> */}
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
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
      <StatusBar hidden/>
    </NavigationContainer>
  );
}
