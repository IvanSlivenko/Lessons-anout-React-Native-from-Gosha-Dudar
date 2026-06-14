import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
  Modal,
  Image
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const handleTextPress = () => console.log('Text pressed');

  const handleButtonPress = () => {
    console.log('handleButtonPress_Click');
    Alert.alert("UmanProger", "Main message", [
      { text: "Так", onPress: () => console.log('Yes button') },
      { text: "Відмінити", onPress: () => console.log('No button') }
    ]);
  };



  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowText = () => {
    console.log(text);
    setText('');
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={2}
        style={styles.text}
        onPress={handleTextPress}
      >
        Мобільний додаток{'\n'}UmanProger
      </Text>

      <View style={styles.imageContainer}>
        {/* <Image
          source={require('./assets/image_about_mobile_app.png')}
          style={styles.image}
        /> */}
        <Image
          blurRadius={1}
          source={{
            width: 380,
            height: 150,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVinUKJBgKf4rOS_sLRBkupRTWXXdQeBA4zw&s"
          }}
        // style={styles.image}
        />
      </View>
      <View style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <Button
          title="Натисни на мене"
          color="grey"
          onPress={handleButtonPress}
        />
      </View>

      <View style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <Button
          title="Відкрити Modal"
          color="purple"
          onPress={() => setModalVisible(true)}
        />
      </View>

      {/* 🔥 MODAL */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>

            <TextInput
              style={styles.input}
              placeholder="Очікуємо ваше повідомлення"
              value={text}
              onChangeText={setText}
            />

            <Button title="OK" onPress={handleShowText} />
            <Button title="Закрити" onPress={() => setModalVisible(false)} />

          </View>
        </View>
      </Modal>



      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 50,
    marginBottom: 25,
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  imageContainer: {
    alignItems: 'center', // центрує по горизонталі
    marginBottom: 20      // відступ знизу
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }


});