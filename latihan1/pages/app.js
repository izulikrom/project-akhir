import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';
const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator
        //headerMode="none"
        >
            <Stack.Screen name='Beranda' component={BottomTabs}
                options={
                    {
                        title: "Beranda",
                        headerShown: false
                    }
                } />
            
{/* //=====================Navigasi Jadwal ==================================// */}
            <Stack.Screen name='Musyawara' component={HomeScreen}
                options={{ title: "Musyawarah Desa", headerShown: true }}
            />
            <Stack.Screen name='Gotongroyong' component={Login}
                options={{ title: "Gotongroyong Bersama", headerShown: true }}
            />
            <Stack.Screen name='Posyandu' component={Register}
                options={{ title: "Posyandu Lansia & Balita", headerShown: true }}
            />
            <Stack.Screen name='PosRonda' component={Profile}
                options={{ title: "Pos Ronda Malam Hari", headerShown: true }}
            />
        </Stack.Navigator>
    )
}

class index extends Component {
    render() {
        return (
            <NavigationContainer>
                <HomeStack />
            </NavigationContainer>
        )
    }
}
export default index