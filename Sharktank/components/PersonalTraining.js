import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import data from '../db.json'; // Import the data from db.json

const PersonalTraining = () => {
  const [personalTrainingEvents, setPersonalTrainingEvents] = useState([]);

  useEffect(() => {
    setPersonalTrainingEvents(data.events);
  }, []);

  const handlePersonalTrainingEvent = (event) => {
    const navigation = useNavigation(); // Use useNavigation hook to get navigation object
    navigation.navigate('PersonalTrainingDetail', { event });
  };

  const handleCompleteEvent = (eventId) => {
    const updatedEvents = personalTrainingEvents.map((event) => {
      if (event.id === eventId) {
        return { ...event, completed: true };
      }
      return event;
    });

    setPersonalTrainingEvents(updatedEvents);
  };

  return (
    <View style={styles.container}>
      {personalTrainingEvents.map((event) => (
        <View key={event.id} style={styles.eventContainer}>
          <TouchableOpacity
            style={[
              styles.eventContent,
              event.completed ? styles.completedEventContent : null,
            ]}
            onPress={() => handlePersonalTrainingEvent(event)}
          >
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            {event.completed && (
              <Text style={styles.eventStatus}>Completed</Text>
            )}
          </TouchableOpacity>

          {!event.completed && (
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => handleCompleteEvent(event.id)}
            >
              <Text style={styles.completeButtonText}>Complete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  eventContent: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  completedEventContent: {
    backgroundColor: 'red',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
  },
  eventStatus: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  completeButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  completeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PersonalTraining;
