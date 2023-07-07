import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PersonalTrainingDetails from './PersonalTrainingDetails';

const PersonalTraining = ({ onPersonalTrainingPress }) => {
  const personalTrainings = [
    { id: 1, title: 'Game', date: '2023-07-10' },
    { id: 2, title: 'Training', date: '2023-07-12' },
  ];

  const handlePersonalTrainingPress = (personalTraining) => {
    onPersonalTrainingPress(personalTraining);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Next Personal Trainings</Text>
      {personalTrainings.map((personalTraining) => (
        <TouchableOpacity
          key={personalTraining.id}
          style={styles.personalTrainingContainer}
          onPress={() => handlePersonalTrainingPress(personalTraining)}
        >
          <Text style={styles.personalTrainingTitle}>{personalTraining.title}</Text>
          <Text style={styles.personalTrainingDate}>{personalTraining.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 35,
    paddingLeft: 35,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  personalTrainingContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  personalTrainingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  personalTrainingDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PersonalTraining;
