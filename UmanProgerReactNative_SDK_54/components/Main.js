import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

    const loadScene = () => {
        navigation.navigate('Contacts')
    }

    const [news, setNews] = useState([
        { name: 'name 1', anons: 'anons 1', full: 'full text 1, full text 1' },
        { name: 'name 2', anons: 'anons 2', full: 'full text 2, full text 2' },
        { name: 'name 3', anons: 'anons 3', full: 'full text 3, full text 3' }
    ])

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Головна сторінка</Text>
            <FlatList data={news} renderItem={{ item } => (
            <TouchableOpacity onPress={ }>
                <Text>{item.name}</Text>
                <Text>{item.anons}</Text>

            </TouchableOpacity>
            )}/>
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const sryles = StyleSheet.create({

});