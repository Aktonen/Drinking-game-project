import React, { useState } from "react";
import {Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "../styles/styles";

export default function Game() {
    return (
        <View style={styles.gameScreen}>
            <Image source={require("../images/Tell_a_joke.png")} style={styles.gameImage}></Image>
        </View>
    )
}