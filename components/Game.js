import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';


export default function Game() {

  // These have to be changed if the app is published
  const IMAGES = [
    'http://192.168.0.105:8081/images/Category_dogs.jpg',
    'http://192.168.0.105:8081/images/Lie_on_your_back.jpg',
    'http://192.168.0.105:8081/images/Old_friends.jpg',
    'http://192.168.0.105:8081/images/Piercing.jpg',
    'http://192.168.0.105:8081/images/Tell_a_joke.png',
  ];

  const [imageUri, setImageUri] = useState(null);
  const [imageArray, setImageArray] = useState(IMAGES);

  useEffect(() => {
    // Fetch a random image on component mount
    const fetchRandomImage = () => {
      const randomImageUri = getRandomImageUriUri(); //eslint-disable-line
      setImageUri(randomImageUri);
    };

    fetchRandomImage();
  }, []);

  function getRandomImageUri() {
    if (imageArray.length === 0) {
      // Handle the case where the array is empty (e.g., all images displayed)
      return null; // Or reset the IMAGES array, or take another action
    }

    // Get a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    // Extract the image URI at the random index
    const imageUri = imageArray[randomIndex];

    // Remove the image from the array
    imageArray.splice(randomIndex, 1);

    // Update the imageUri state
    setImageUri(imageUri);
    setImageArray(imageArray);

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
      <Pressable style={styles.gameArrowRight} onPress={getRandomImageUri}>
        <Icon name="arrowright" size={100} color="black" />
      </Pressable>
      <Pressable style={styles.gameArrowLeft}>
        <Icon name="arrowleft" size={100} color="black" />
      </Pressable>
    </View>
  );
}
