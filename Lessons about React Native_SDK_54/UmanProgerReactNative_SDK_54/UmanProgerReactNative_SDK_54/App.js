import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import Header from './components/Header';
import ListItem from './components/ListItem';



export default function App() {

  const [listOItems, setListOfItems] = useState([
    { text: 'Перенести мішки з січеною гілкою у дровник', index: 1 },
    { text: 'Придбати дрова', index: 2 },
    { text: 'Перенести дрова у дровник', index: 3 },
    { text: 'Пройти навчання з react native', index: 4 },
  ])

  return (


    <View>
      <Header />
      <FlatList data={listOItems} renderItem={({ item }) => (
        // <Text>{item.index}. {item.text}</Text>
        <ListItem el={item} />
      )} />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {}

});