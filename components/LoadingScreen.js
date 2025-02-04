import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Animated } from 'react-native';

const LoadingScreen = () => {

  const [slideAnim] = useState(new Animated.Value(300));

  useEffect(() => {

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image 
        style={[styles.image, { transform: [{ translateX: slideAnim }] }]}
        source={require("../assets/images/moringaconnectSplash.jpg")}
      />
      {/* Ensure the ActivityIndicator is wrapped in a Text component */}
     <Text>
      <ActivityIndicator 
      size="large" 
      color="#006400" 
      accessibilityLabel={"Loading Indicator"}
      style={styles.loader}
      />
     </Text>
      <Text style={styles.text}>Moringa Connect Loading...</Text> {/* This should be correctly inside the <Text> component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20B2AA', // Splash screen background color
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loader: {
    position: "absolute",
    bottom: 30
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  }
});

export default LoadingScreen;



