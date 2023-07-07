import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Vibration } from 'react-native';
import Profile from './components/Profile';
import Events from './components/Events';
import EventDetails from './components/EventDetails.js';
import PersonalTraining from './components/PersonalTraining';
import PersonalTrainingDetails from './components/PersonalTrainingDetails';
import axios from 'axios';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [eventDetails, setEventDetails] = useState(null);

  const handleEventPress = (event) => {
    setCurrentPage('eventDetails');
    setEventDetails(event);
  };

  const handlePersonalTrainingEvent = () => {
    setCurrentPage('personalTrainingDetails');
    Vibration.vibrate(500);
  };

  const handlePersonalTrainingPress = () => {
    const personalTraining = {
      title: 'Game',
      date: '2023-07-10',
      exercises: [
        { name: 'Exercise 1', reps: '10 reps' },
        { name: 'Exercise 2', reps: '12 reps' },
        { name: 'Exercise 3', reps: '8 reps' },
      ],
    };
    // Code to open personal training details using personalTraining data
    // For example, you can navigate to a new screen or show a modal with the details
    console.log('Opening personal training details:', personalTraining);
  };
  const handleBackPress = () => {
    setCurrentPage('landing');
    setEventDetails(null);
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
            <PersonalTraining onPersonalTrainingPress={handlePersonalTrainingPress} />

          </View>
        </View>
      );
    } else if (currentPage === 'eventDetails') {
      return (
        <EventDetails
          onBackPress={handleBackPress}
          event={eventDetails}
          updateEvent={updateEvent}
        />
      );
    } else if (currentPage === 'personalTrainingDetails') {
      return <PersonalTrainingDetails onBackPress={handleBackPress} />;
    }
  };

  const updateEvent = async (event) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/events/${event.id}`,
        event
      );
      if (response.status === 200) {
        // Event updated successfully
        setEventDetails(response.data);
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/events');
        if (response.status === 200) {
          // Events fetched successfully
          const events = response.data;
          setEventDetails(events[0]); // Set the first event as initial event details
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
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
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
