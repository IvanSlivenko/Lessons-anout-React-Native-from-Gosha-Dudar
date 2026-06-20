import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {


    const [news, setNews] = useState([
        { name: 'name 1', anons: 'anons 1', full: 'full text 1, full text 1', key: '1', img: 'https://i.gordonua.com/news/2026/6/20/depositphotos47093761l-1.jpg?size=465x310' },
        { name: 'name 2', anons: 'anons 2', full: 'full text 2, full text 2', key: '2', img: 'https://i.gordonua.com/news/2026/6/20/14083271.jpg?size=960x540' },
        { name: 'name 3', anons: 'anons 3', full: 'full text 3, full text 3', key: '3', img: 'https://i.gordonua.com/news/2026/6/6/51376289028461438a0076k.jpg?size=960x540' }
    ])

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Головна сторінка</Text>
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image source={{
                        width: '100%',
                        height: 200,
                        uri: item.img
                    }} />
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>

                </TouchableOpacity>
            )} />
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const sryles = StyleSheet.create({

});