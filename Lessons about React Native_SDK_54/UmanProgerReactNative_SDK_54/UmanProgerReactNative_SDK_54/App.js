import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from './styles/style';

export default function App() {

  const [fontsLoaded] = useFonts({
    'mt-ital': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  if (fontsLoaded) {
    return (
      <View style={gStyle.main}>
        <Text
          style={gStyle.title}
        >
          Hello
        </Text>
      </View>
    );
  } else {
    return (
      < View style={gStyle.main} >
        <Text style={gStyle.title}>
          Upload
        </Text>
      </View >
    )
  }

}