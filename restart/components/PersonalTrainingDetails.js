import React from 'react';
import { View } from 'react-native';
import PersonalTraining from './PersonalTraining';
import PersonalTrainingDetails from './PersonalTrainingDetails';

const App = () => {
  const handlePersonalTrainingPress = (personalTraining) => {
    // Code to open personal training details using personalTraining data
    // For example, you can navigate to a new screen or show a modal with the details
    console.log('Opening personal training details:', personalTraining);
  };

  return (
    <View>
      <PersonalTraining onPersonalTrainingPress={handlePersonalTrainingPress} />
      {/* Other components */}
    </View>
  );
};

export default App;
