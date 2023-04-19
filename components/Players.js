import React, { useState } from "react";
import {Text, View, TextInput, Pressable } from "react-native";
import styles from "../styles/styles";



export default function AddPlayer(){

    const [playerName, setplayerName] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    function handlePlayerName(){
        
    }

    if (loggedIn){
        return (
            <View>
                <Pressable onPress={() => navigation.navigate("Game")}>
                    <Text>Continue</Text>
                </Pressable>
            </View>
        )
    }
    else {
        return (
            <View>
                <Text style={styles.enterPlayer}>Enter players:</Text>
                    <TextInput
                        style={styles.playerInput}
                        value={playerName}
                        onChangeText={(t) => setplayerName(t)}
                    />
                    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' }, styles.startButton ]}
                        onPress={handlePlayerName()}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Add player</Text>
                    )}
                    </Pressable>

                    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'blue' }, styles.startButton ]}
                        onPress={() => setLoggedIn(true)}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>Start game</Text>
                        )}
                    </Pressable>
            </View>
        )
    }

}