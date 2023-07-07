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

        <Text style={styles.tableHeader}>Starting Offense</Text>
        <View style={styles.table}>
          <Text style={styles.tableRow}>Player 1</Text>
          <Text style={styles.tableRow}>Player 2</Text>
          <Text style={styles.tableRow}>Player 3</Text>
          <Text style={styles.tableRow}>Player 3</Text>
          <Text style={styles.tableRow}>Player 3</Text>
          <Text style={styles.tableRow}>Player 3</Text>
          <Text style={styles.tableRow}>Player 3</Text>

        </View>

        <Text style={styles.tableHeader}>Starting Defense</Text>
        <View style={styles.table}>
          <Text style={styles.tableRow}>Player 4</Text>
          <Text style={styles.tableRow}>Player 5</Text>
          <Text style={styles.tableRow}>Player 6</Text>
        </View>

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
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  tableRow: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default EventDetails;
