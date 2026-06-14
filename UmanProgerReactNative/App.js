import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';


export default function App() {
  const handleTextPress = () => console.log('Text pressed')
  const handleButtonPress = () => {
    console.log('handleButtonPress_Click')
    Alert.alert("UmanProger", "Main message", [{ text: "Так" }, { text: "Відмінити" }])
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={2}
        style={styles.text}
        onPress={handleTextPress}
      >
        Hello {'\n'}My APP !!!
      </Text>
      <Button
        title="Натисни на мене"
        color='yellow'
        onPress={handleButtonPress}
      />


      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'yellow'
  },


});
