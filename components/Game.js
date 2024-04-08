import React, { useState, useEffect } from "react";
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
  ];

  const [imageUri, setImageUri] = useState(null)

  useEffect(() => {
    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      const randomImageUri = GetRandomImage();
      setImageUri(randomImageUri);
    };

    fetchRandomImage();
  }, []);

  function GetRandomImage() {
    if (IMAGES.length === 0) {
      // Handle the case where the array is empty (e.g., all images displayed)
      return null; // Or reset the IMAGES array, or take another action
    }

    // Get a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * IMAGES.length);

    // Extract the image URI at the random index 
    const imageUri = IMAGES[randomIndex];

    // Remove the image from the array
    // THIS DOES NOT WORK CURRENTLY
    IMAGES.splice(randomIndex, 1);

    // Update the imageUri state
    setImageUri(imageUri)

    // Return the randomly selected image URI
    return imageUri;
  }

  return (
    <View style={styles.gameScreen}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.gameImage} />
      ) : (
        <Text>Loading Image...</Text>
      )}
      <Pressable style={styles.gameArrowRight} onPress={GetRandomImage}>
        <Icon name="arrowright" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.gameArrowLeft}>
        <Icon name="arrowleft" size={100} color="black" />
      </Pressable>
    </View>
  )
}