import React from 'react';
import { StyleSheet, View, Button, Text, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form_formik() {


    return (
        <View>
            <Formik initialValues={{ name: '', anons: '', full: '', img: '' }} onSubmit={(values) => {
                console.log(values);
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            value={props.values.name}
                            placeholder='Назва'
                            onChangeText={props.handleChange('name')} />

                        <TextInput
                            value={props.values.anons}
                            multiline
                            placeholder='Анонс'
                            onChangeText={props.handleChange('anons')} />

                        <TextInput
                            value={props.values.full}
                            multiline
                            placeholder='Текст статті'
                            onChangeText={props.handleChange('full')} />

                        <TextInput
                            value={props.values.img}
                            placeholder='фото'
                            onChangeText={props.handleChange('img')} />
                        <Button title='Додати' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>

    );
}

const styles = StyleSheet.create({

});

