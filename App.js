import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Button, ScrollView } from 'react-native';

import HandlePlayer from './components/Players';
import styles from "./styles/styles";
import AddPlayer from './components/Players';
import Game from "./components/Game"

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Intoxi-deck</Text>
      <AddPlayer></AddPlayer>
      <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' }, styles.startButton ]}
        onPress={() => navigation.navigate('Game')}>
        {({ pressed }) => (
        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Start game</Text>
          )}
      </Pressable>
    </View>
  );
}

function MenuGame({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Game></Game>
    </View>
  );
}

// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

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
        // options={{ headerStyleInterpolator: forFade }}
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
