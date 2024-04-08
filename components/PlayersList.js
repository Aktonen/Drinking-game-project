// import React, { useState, useEffect } from 'react';
// import { FlatList, Text, View, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PlayersList = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const loadPlayers = async () => {
//       try {
//         const storedPlayers = await AsyncStorage.getItem('players');
//         if (storedPlayers) {
//           setPlayers(JSON.parse(storedPlayers));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadPlayers();
//   }, []);

//   const renderPlayer = ({ item }) => {
//     const handleDeletePlayer = async () => {
//       const newPlayers = players.filter((player) => player !== item);
//       try {
//         await AsyncStorage.setItem('players', JSON.stringify(newPlayers));
//         setPlayers(newPlayers);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     return (
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Text style={{ marginRight: 10 }}>{item}</Text>
//         <TouchableOpacity onPress={handleDeletePlayer}>
//           <Text style={{ color: 'red' }}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <FlatList
//         horizontal
//         data={players}
//         renderItem={renderPlayer}
//         keyExtractor={(item) => item}
//       />
//     </View>
//   );
// };

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const PlayersList = ({ players }) => {
  const renderPlayer = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 10 }}>{item}</Text>
    </View>
  )

  console.log(typeof players);


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
