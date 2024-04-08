import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "../styles/styles";
import Icon from 'react-native-vector-icons/AntDesign';


export default function Game() {


  // These have to be changed if the app is published
  const IMAGES = [
    "http://192.168.0.104:19000/images/Category_dogs.jpg",
    "http://192.168.0.104:19000/images/Lie_on_your_back.jpg",
    "http://192.168.0.104:19000/images/Old_friends.jpg",
    "http://192.168.0.104:19000/images/Piercing.jpg",
    "http://192.168.0.104:19000/images/Tell_a_joke.png"
  ]


  return (
    <View style={styles.gameScreen}>
      <Image source={{uri:IMAGES[0]}} style={styles.gameImage}></Image>
      <Pressable style={styles.gameArrowRight}>
        <Icon name="arrowright" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.gameArrowLeft}>
        <Icon name="arrowleft" size={100} color="black" />
      </Pressable>
    </View>
  )
}