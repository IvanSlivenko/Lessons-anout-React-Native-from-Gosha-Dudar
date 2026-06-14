import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Pressable,
    TouchableHighlight,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Form({ addHandler }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };


    return (
        <View>

            <TextInput
                style={styles.input}
                value={text}
                onChangeText={onChange}
                placeholder='Опишіть завдання ...'
            />
            <View style={styles.buttonWrapper}>
                <TouchableHighlight
                    style={styles.buttonAdd}
                    onPress={() => {
                        const cleanText = text.trim();

                        if (!cleanText) {
                            Alert.alert("Зверніть увагу", "Текст завдання не має бути пустим.");
                            return;
                        }

                        addHandler(cleanText);
                        setValue('');
                    }}
                >
                    <Text style={styles.buttonAddText}>
                        Додати завдання
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },
    buttonAdd: {
        width: '60%',
        backgroundColor: '#696060',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },

    buttonAddText: {
        color: '#fff',
        fontWeight: '500'
    }


});