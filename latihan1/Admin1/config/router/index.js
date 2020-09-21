import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

import { Navigation } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from '../../../pages/home';
import Login from '../../../pages/login';
import Register from '../../../pages/register';
import Profile from '../../../pages/profile';
import Daftar from '../../../pages/Daftar';
import {
    Home, Activity, Bumdes, Saran
} from './Import'
const MaterialBottom = createMaterialBottomTabNavigator();


const HomeStack = () => {
    return (
        <MaterialBottom.Navigator
        shifting={false}
        initialRouteName="Home" //Waktu Buka pertama kali apk maka menu Home yg pertama muncul "index"===========
        activeColor='#09AB54'
        inactiveColor='#676767'
        barStyle={{ backgroundColor: 'white', borderWidth: .3, borderColor: 'lighgrey' }}>
        <MaterialBottom.Screen name="Home" component={Home}
            options={{//untuk mengatur Botton =========================
                tabBarLabel: 'Beranda', //Merubah nama Tab=======
                tabBarIcon: ({ color }) => (
                    <View style={{ marginTop: -4 }}>
                        {
                            //Biar beda warna pas di klik==========
                            color == "#676767" ?
                                <Image source={require('../../../source/asset/icon/Button/home.png')} style={{ height: 30, width: 30 }} />
                                :
                                <Image source={require('../../../source/asset/icon/Button/home-active.png')} style={{ height: 30, width: 30 }} />
                        }
                    </View>
                )
            }} />
        <MaterialBottom.Screen name="Activity" component={Activity}
            options={{//untuk mengatur Botton =========================
                tabBarLabel: 'Surat',
                tabBarIcon: ({ color }) => (
                    <View style={{ marginTop: -4, marginLeft: 7 }}>
                        {
                            //Biar beda warna pas di klik==========
                            color == "#676767" ?
                                <Image source={require('../../../source/asset/icon/Button/document.png')} style={{ height: 30, width: 30 }} />
                                :
                                <Image source={require('../../../source/asset/icon/Button/document-active.png')} style={{ height: 30, width: 30 }} />
                        }
                    </View>
                )
            }} />
        <MaterialBottom.Screen name="Bumdes" component={Bumdes}
            options={{//untuk mengatur Botton =========================
                tabBarLabel: 'BumDes',
                tabBarIcon: ({ color }) => (
                    <View style={{ marginTop: -4 }}>
                        {
                            //Biar beda warna pas di klik==============
                            color == "#676767" ?
                                <Image source={require('../../../source/asset/icon/Button/shop.png')} style={{ height: 30, width: 30 }} />
                                :
                                <Image source={require('../../../source/asset/icon/Button/shop-active.png')} style={{ height: 30, width: 30 }} />
                        }
                    </View>
                )
            }} />
        <MaterialBottom.Screen name="Saran" component={Saran}
            options={{ //untuk mengatur Botton =========================
                tabBarLabel: 'Kritik',
                tabBarIcon: ({ color }) => (
                    <View style={{ marginTop: -4 }}>
                        {
                            //Biar beda warna pas di klik============
                            color == "#676767" ?
                                <Image source={require('../../../source/asset/icon/Button/comment.png')} style={{ height: 30, width: 30 }} />
                                :
                                <Image source={require('../../../source/asset/icon/Button/comment-active.png')} style={{ height: 30, width: 30 }} />
                        }
                    </View>
                )
            }} />
    </MaterialBottom.Navigator>
    )
}



class index extends Component {
    render() {
        return (
            <Navigation>
                <HomeStack />
            </Navigation>
        )
    }
}
export default index