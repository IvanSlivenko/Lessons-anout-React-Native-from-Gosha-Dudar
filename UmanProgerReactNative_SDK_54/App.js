import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from './styles/style';

import Main from './components/Main';
import Contacts from './components/FullInfo';
import MainStack from './navigate';
import Loading from './components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    'mt-ital': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'mt-bolt': require('./assets/fonts/Montserrat-Bold.ttf'),
    'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (fontsLoaded) {
    return (
      <MainStack />
    );
  } else {
    return (
      <Loading />
    )
  }

}