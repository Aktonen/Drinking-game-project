import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "../styles/styles";
import Icon from 'react-native-vector-icons/AntDesign';


export default function Game() {
  return (
    <View style={styles.gameScreen}>
      <Image source={require("../images/Old_friends.jpg")} style={styles.gameImage}></Image>
      <Pressable style={styles.gameArrowRight}>
        <Icon name="arrowright" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.gameArrowLeft}>
        <Icon name="arrowleft" size={100} color="black" />
      </Pressable>
    </View>
  )
}