import React, { useState } from "react";
import {Text, View, TextInput } from "react-native";
import styles from "../styles/styles";

export default function HandlePlayer(){

    const [playerName, setplayerName] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    if (loggedIn){

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
            </View>
        )
    }

}