import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Головна',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#eb5d3d',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: '400'
                        }
                    }
                }}
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{
                    title: 'Стаття',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}



