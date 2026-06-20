import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {


    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{route.params.name}</Text>
            <Text >{route.params.full}</Text>
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const sryles = StyleSheet.create({

});

