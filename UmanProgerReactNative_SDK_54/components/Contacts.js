import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function Contacts({ navigation }) {

    // const loadScene = () => {
    //     navigation.goBack()
    // }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>
                Cторінка про нас
            </Text>
            {/* <Button title='Відкрити сторінку' onPress={loadScene} /> */}
        </View>
    );
}

const sryles = StyleSheet.create({

});

