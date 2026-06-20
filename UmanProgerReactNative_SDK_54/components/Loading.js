import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';

export default function Loading() {

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>
                Завантаження...
            </Text>
        </View>
    );
}

const sryles = StyleSheet.create({

});