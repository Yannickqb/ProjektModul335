
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EventDetails = ({ onBackPress, event, updateEvent }) => {
  const handleEventUpdate = () => {
    const updatedEvent = { ...event, completed: 1 };
    updateEvent(updatedEvent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>sharktank</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.details}>Event Details</Text>
        <Text style={styles.description}>Event Type: {event.title}</Text>
        <Text style={styles.description}>Date: {event.date}</Text>
        <Button title="Mark Completed" onPress={handleEventUpdate} />
        <Button title="Go Back" onPress={onBackPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 50,
    height: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 30,
    backgroundColor: 'gray',
    alignContent: 'center',
  },
  details: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default EventDetails;