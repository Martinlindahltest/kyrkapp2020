import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MainNavigator from './Navigation/MainNavigator'


const fetchFonts = () => {
  return Font.loadAsync({
    'avenir-roman': require('./assets/fonts/Avenir-Roman.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState();

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <MainNavigator />
  );
}

