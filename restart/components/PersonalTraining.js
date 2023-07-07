import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PersonalTrainingDetails from './PersonalTrainingDetails';

const PersonalTraining = ({ onEventPress }) => {
    const events = [
      { id: 1, title: 'Game', date: '2023-07-10' },
      { id: 2, title: 'Training', date: '2023-07-12' },
    ];
  
    const handleEventPress = (event) => {
      onEventPress(event.title); // Pass the event title
    };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Next Events</Text>
      {events.map((event) => (
        <TouchableOpacity
          key={event.id}
          style={styles.eventContainer}
          onPress={() => handleEventPress(event)}
        >
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDate}>{event.date}</Text>
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
    textAlign: 'center',
    color: 'white'
  },
  eventContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderStyle: 'solid',
    borderColor: '#ECF500',
    borderWidth: 2,
    color: 'white'
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PersonalTraining;