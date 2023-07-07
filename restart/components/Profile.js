import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Linking } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { Device } from 'expo-device';


const Profile = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);

        const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
        if (pastStepCountResult) {
          setCurrentStepCount(pastStepCountResult.steps);
        }

        Pedometer.watchStepCount(result => {
          if (isMounted) {
            setCurrentStepCount(result.steps);
          }
        });
      }
    };

    subscribe();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/foo.png')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.content}>
          <Image
            source={require('../assets/pb.png')}
            style={styles.profilePicture}
            onPress={() => Linking.openURL('./Stats.js')}
          />
          <Text style={styles.name}>Yannick Ledermann</Text>
          <Text style={styles.position}>QB</Text>
          <Text style={styles.stepCount}>Steps taken in the last 24 hours: {currentStepCount}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  position: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  stepCount: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});

export default Profile;
