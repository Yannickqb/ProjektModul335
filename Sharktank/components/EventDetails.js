import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EventDetails = ({ onBackPress, eventType }) => {
  let headerText = '';

  if (eventType === 'Game') {
    headerText = 'Game';
  } else if (eventType === 'Training') {
    headerText = 'Training';
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>sharktank</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.details}>Event Details</Text>
        <Text style={styles.description}>Event Type: {eventType}</Text>
        <Text style={styles.description}>Date: 2023-07-10</Text>
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
