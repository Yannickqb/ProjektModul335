import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const PersonalTrainingDetails = ({ route, navigation }) => {
  const { event } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTrainingPress(item.id)}>
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{item.exercise}</Text>
        <Text style={styles.tableCell}>{item.reps}</Text>
      </View>
    </TouchableOpacity>
  );

  const onTrainingPress = (trainingId) => {
    // Handle training item press
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>sharktank</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.details}>Training Plan</Text>
        <Text style={styles.description}>Event Type: {event.title}</Text>
        <Text style={styles.description}>Date: {event.date}</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Exercise</Text>
          <Text style={styles.tableHeaderCell}>Reps</Text>
        </View>
        <FlatList
          data={event.exercises}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button title="Go Back" onPress={handleBackPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
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
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    padding: 2,
    marginLeft: 5,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'red',
  },
});

export default PersonalTrainingDetails;
