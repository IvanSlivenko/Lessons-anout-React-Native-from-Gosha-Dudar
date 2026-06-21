import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {


    return (
        <View style={gStyle.main}>
            <Image style={styles.images} source={{ uri: route.params.img }} />
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-regular',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    header: {
        fontSize: 25,
        marginTop: 25
    },
    images: {
        width: '100%',
        height: 200,
    }
});

