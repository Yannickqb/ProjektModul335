import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Stats = ({ navigation }) => {
  const renderCakeDiagram = () => {
    const missedTrainings = 3; // Replace with actual missed trainings count
    const attendedTrainings = 7; // Replace with actual attended trainings count
    const totalTrainings = missedTrainings + attendedTrainings;
    const missedPercentage = (missedTrainings / totalTrainings) * 100;
    const attendedPercentage = (attendedTrainings / totalTrainings) * 100;

    return (
      <View style={styles.cakeDiagramContainer}>
        <View
          style={[styles.cakeSlice, { backgroundColor: 'red', transform: [{ rotate: `${missedPercentage}deg` }] }]}
        />
        <View
          style={[styles.cakeSlice, { backgroundColor: 'green', transform: [{ rotate: `${attendedPercentage}deg` }] }]}
        />
      </View>
    );
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {renderCakeDiagram()}
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cakeDiagramContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 30,
  },
  cakeSlice: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default Stats;
