import React from 'react';
import { StyleSheet, View, Button, Text, Image, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form_formik({ addArticle }) {


    return (
        <View>
            <Formik initialValues={{ name: '', anons: '', full: '', img: '' }} onSubmit={(values, action) => {
                // console.log(values);
                addArticle(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Назва'
                            onChangeText={props.handleChange('name')} />

                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            multiline
                            placeholder='Анонс'
                            onChangeText={props.handleChange('anons')} />

                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Текст статті'
                            onChangeText={props.handleChange('full')} />

                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder='фото'
                            onChangeText={props.handleChange('img')} />
                        {/* <Button title='Додати' onPress={props.handleSubmit} /> */}
                        <Pressable
                            style={({ pressed }) => [
                                styles.btn,
                                pressed && styles.btnPressed
                            ]}
                            onPress={props.handleSubmit}
                        >
                            <Text style={styles.btnText}>Додати</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    },
    btn: {
        marginTop: 15,
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center'
    },
    btnPressed: {
        opacity: 0.7
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

