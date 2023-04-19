import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import HandlePlayer from './components/Players';
import styles from "./styles/styles";
import AddPlayer from './components/Players';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intoxi-deck</Text>
        <AddPlayer></AddPlayer>
      <StatusBar hidden/>
    </View>
  );
}
