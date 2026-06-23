import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Form_formik from './Form_formik';

export default function Main({ navigation }) {


    const [news, setNews] = useState([
        { name: 'name 1', anons: 'anons 1', full: 'full text 1, full text 1', key: '1', img: 'https://i.gordonua.com/news/2026/6/20/depositphotos47093761l-1.jpg?size=465x310' },
        { name: 'name 2', anons: 'anons 2', full: 'full text 2, full text 2', key: '2', img: 'https://i.gordonua.com/news/2026/6/20/14083271.jpg?size=960x540' },
        { name: 'name 3', anons: 'anons 3', full: 'full text 3, full text 3', key: '3', img: 'https://i.gordonua.com/news/2026/6/6/51376289028461438a0076k.jpg?size=960x540' }
    ])

    const [modalWindow, setmodalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        })
        setmodalWindow(false);
    }


    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <MaterialCommunityIcons name="close-circle-outline" size={34} color="#8e0cf8" style={styles.iconClose} onPress={() => setmodalWindow(false)} />
                    <Text style={styles.title}>Форма додавання статей</Text>
                    <Form_formik addArticle={addArticle} />
                </View>

            </Modal>

            <Ionicons name="add-circle-outline" size={34} color="#6d3602" style={styles.iconAdd} onPress={() => setmodalWindow(true)} />
            <Text style={[gStyle.title, styles.header]}>Новини</Text>
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{ uri: item.img }} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>


                </TouchableOpacity>
            )} />
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'mt-bolt',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'

    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    header: {
        marginBottom: 30
    },
    image: {
        weight: '100%',
        height: 200
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },
    iconClose: {
        textAlign: 'right',
        marginTop: 5,
        marginRight: 5

    }
});