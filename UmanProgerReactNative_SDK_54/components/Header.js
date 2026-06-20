import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Header() {

    return (


        <View style={styles.main}>
            <Text style={styles.text}>Список справ</Text>
            {/* <Text style={styles.text}>Оберіть майстрів</Text> */}
        </View>



    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: '#a50cec',
        textAlign: 'center'
    }

});