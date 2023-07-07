import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalTrainingDetails = ({ personalTraining }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{personalTraining.title}</Text>
      <Text style={styles.date}>{personalTraining.date}</Text>
      <Text style={styles.subtitle}>Exercise and Reps:</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.columnHeader}>Exercise</Text>
          <Text style={styles.columnHeader}>Reps</Text>
        </View>
        {personalTraining.exercises.map((exercise, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCell}>{exercise.name}</Text>
            <Text style={styles.tableCell}>{exercise.reps}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 8,
  },
  columnHeader: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
  },
});

export default PersonalTrainingDetails;
