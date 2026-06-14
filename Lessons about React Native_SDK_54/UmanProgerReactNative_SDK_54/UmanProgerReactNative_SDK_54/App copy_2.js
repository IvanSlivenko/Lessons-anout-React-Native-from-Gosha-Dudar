import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Modal,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaViewBase
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {

  return (

    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, { backgroundColor: 'yellow' }]}></View>
      <View style={[styles.box, { backgroundColor: 'black', height: 200, alignSelf: 'flex-start' }]}></View>
      <View style={[styles.box, { backgroundColor: 'gray' }]}></View>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({

  mainBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100
  }
});