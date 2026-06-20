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
import Form from './components/Form';


export default function App() {

  const [listOItems, setListOfItems] = useState([
    { text: 'Перенести мішки з січеною гілкою у дровник', key: '1' },
    { text: 'Придбати дрова', key: '2' },
    { text: 'Перенести дрова у дровник', key: '3' },
    { text: 'Пройти навчання з react native', key: '4' },
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOItems => listOItems.key != key)
    })
  }

  return (


    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <FlatList data={listOItems} renderItem={({ item }) => (
        // <Text>{item.index}. {item.text}</Text>
        <ListItem el={item} deleteHandler={deleteHandler} />
      )} />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333'
  }

});