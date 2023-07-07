import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Profile from './components/Profile';
import Events from './components/Events';
import EventDetails from './components/EventDetails.js';
import PersonalTraining from './components/PersonalTraining';
import PersonalTrainingDetails from './components/PersonalTrainingDetails';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('personalTrainingDB.db');

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleEventPress = () => {
    setCurrentPage('eventDetails');
  };

  const handlePersonalTrainingEvent = () => {
    setCurrentPage('personalTrainingDetails');
  };

  const handleBackPress = () => {
    setCurrentPage('landing');
  };

  const renderPage = () => {
    if (currentPage === 'landing') {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>sharktank</Text>
          </View>
          <View style={styles.content}>
            <Profile />
            <Events onEventPress={handleEventPress} />
            <Text style={styles.sectionTitle}>Personal Training</Text>
            <View style={styles.scrollableBox}>
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                <PersonalTraining
                  onPersonalTrainingEvent={handlePersonalTrainingEvent}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      );
    } else if (currentPage === 'eventDetails') {
      return <EventDetails onBackPress={handleBackPress} eventType="Game" />;
    } else if (currentPage === 'personalTrainingDetails') {
      return <PersonalTrainingDetails onBackPress={handleBackPress} />;
    }
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, completed INTEGER)'
      );

      const jsonData = {
        events: [
          { id: 1, title: 'Push Ups', date: '2023-07-10', completed: 0 },
          { id: 2, title: 'Gym', date: '2023-07-12', completed: 0 },
          { id: 3, title: 'Gym', date: '2023-07-12', completed: 0 },
          { id: 4, title: 'Gym', date: '2023-07-12', completed: 0 }
        ]
      };

      jsonData.events.forEach((event) => {
        tx.executeSql(
          'INSERT INTO events (title, date, completed) VALUES (?, ?, ?)',
          [event.title, event.date, event.completed]
        );
      });
    });
  }, []);

  return renderPage();
}

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
    backgroundColor: 'gray',
  },
  scrollableBox: {
    height: 300,
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
