import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { AppLogin,HomeLogin,Login,Register,Profile,Daftar
} from './Import'
const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
        //headerMode="none"
        >
            <Stack.Screen name='HomeLogin' component={HomeLogin}
                options={{ title: "Musyawarah Desa", headerShown: false }}
            />
            <Stack.Screen name='Login' component={Login}
                options={{ title: "Login", headerShown: true }}
            />
            <Stack.Screen name='Register' component={Register}
                options={{ title: "Register", headerShown: true }}
            />
            <Stack.Screen name='Profile' component={Profile}
                options={{ title: "Pos Ronda Malam Hari", headerShown: true }}
            />
            <Stack.Screen name='Daftar' component={Daftar}
                options={{ title: "Daftar Akun", headerShown: true }}
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