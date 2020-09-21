import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';

import HomeScreen from '../../../pages/home';
import Login from '../../../pages/login';
import Register from '../../../pages/register';
import Daftar from '../../../pages/Daftar';
import {
    Home, Activity, Saran, SuratPindah, PengantarKtp,Faq,
    Musyawara, Gotongroyong, Posyandu, PosRonda, SuratDomisili, TambahSaran,
    SuratTidakMampu, Lainnya, Admin, Sekretaris, LihatSuratDomisili, PengantarSkck, PengantarNikah,
    LihatSuratTM,LihatSuratPD,LihatSuratKtp,LihatSuratSkck,LihatSuratNikah,Splash,
    SettingSaran,SettingBerita,SekretarisAdmin,LoginAdmin,LoginSekretaris,KelolaData,DataVerif,TambahVerif,TambahBerita,DataJadwal
} from '../../page';

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator
        //headerMode="none"
        >
            <Stack.Screen name='splash' component={Splash}
                options={{ title: "Gotongroyong Bersama", headerShown: false }}
            />
            <Stack.Screen name='Login' component={Login}
                options={{ title: "Gotongroyong Bersama", headerShown: false }}
            />
            <Stack.Screen name='Register' component={Register}
                options={{ title: "Daftar Akun", headerShown: true }}
            />
            <Stack.Screen name='Daftar' component={Daftar}
                options={{ title: "Verifikasi", headerShown: true }}
            />
            <Stack.Screen name='Beranda' component={BottomTabs}
                options={
                    {
                        title: "Beranda",
                        headerShown: false
                    }
                } />

            {/* //=====================Navigasi Jadwal ==================================// */}
            <Stack.Screen name='Musyawara' component={Musyawara}
                options={{ title: "Musyawarah Desa", headerShown: true}}
            />
            <Stack.Screen name='Gotongroyong' component={Gotongroyong}
                options={{ title: "Gotongroyong Bersama", headerShown: true}}
            />
            <Stack.Screen name='Posyandu' component={Posyandu}
                options={{ title: "Posyandu Lansia & Balita", headerShown: true }}
            />
            <Stack.Screen name='PosRonda' component={PosRonda}
                options={{ title: "Pos Ronda Malam Hari", headerShown: true }}
            />

            {/* //=====================Navigasi Pembuatan Surat ==================================// */}
            <Stack.Screen name='SuratDomisili' component={SuratDomisili}
                options={{ title: "Surat Domisili", headerShown: true }}
            />
            <Stack.Screen name='SuratTidakMampu' component={SuratTidakMampu}
                options={{ title: "Surat Keterangan Tidak Mampu", headerShown: true }}
            />
            <Stack.Screen name='SuratPindah' component={SuratPindah}
                options={{ title: "Surat Keterangan Pindah Penduduk", headerShown: true }}
            />
            <Stack.Screen name='PengantarKtp' component={PengantarKtp}
                options={{ title: "Surat Pengantar Mengurus Ktp", headerShown: true }}
            />
            <Stack.Screen name='PengantarSkck' component={PengantarSkck}
                options={{ title: "Surat Pengantar Mengurus SKCK", headerShown: true }}
            />
            <Stack.Screen name='PengantarNikah' component={PengantarNikah}
                options={{ title: "Surat Pengantar Nikah", headerShown: true }}
            />


            <Stack.Screen name='Lainnya' component={Lainnya}
                options={{ title: "Surat", headerShown: false }}
            />
            {/* //=====================Navigasi Tambahkan Lainnya ==================================// */}
            <Stack.Screen name='Admin' component={Admin}
                options={{ title: "Surat", headerShown: false }}
            />
             <Stack.Screen name='KelolaData' component={KelolaData}
                                options={{ title: "Kelola Data", headerShown: true }}
                            />
             <Stack.Screen name='SekretarisAdmin' component={SekretarisAdmin}
                                options={{ title: "Kelola Sekretaris", headerShown: true }}
                            />
                 <Stack.Screen name='SettingSaran' component={SettingSaran}
                options={{ title: "Kelola Saran", headerShown: true }}
            />
                <Stack.Screen name='SettingBerita' component={SettingBerita}
                                options={{ title: "Kelola Berita", headerShown: true }}
                            />
                            <Stack.Screen name='DataVerif' component={DataVerif}
                                options={{ title: "Kelola Data Verifikasi", headerShown: true }}
                            />
                            <Stack.Screen name='TambahVerif' component={TambahVerif}
                                options={{ title: "Data Verifikasi", headerShown: true }}
                            />
                            <Stack.Screen name='TambahBerita' component={TambahBerita}
                                options={{ title: "Data Berita", headerShown: true }}
                            />
                             <Stack.Screen name='DataJadwal' component={DataJadwal}
                                options={{ title: "Data Jadwal", headerShown: true }}
                            />



            <Stack.Screen name='Sekretaris' component={Sekretaris}
                options={{ title: "Data", headerShown: false }}
            />
                    {/* //=====================Navigasi Lihat Data Di Sekretaris ==================================// */}
                    <Stack.Screen name='LihatSuratDomisili' component={LihatSuratDomisili}
                        options={{ title: "Data Surat Domisili", headerShown: true }}
                    />
                    <Stack.Screen name='LihatSuratTM' component={LihatSuratTM}
                        options={{ title: "Data Surat Tidak Mampu", headerShown: true }}
                        />
                        <Stack.Screen name='LihatSuratPD' component={LihatSuratPD}
                        options={{ title: "Data Surat Pindah Penduduk", headerShown: true }}
                        />
                        <Stack.Screen name='LihatSuratKtp' component={LihatSuratKtp}
                        options={{ title: "Data Surat KTP", headerShown: true }}
                        />
                        <Stack.Screen name='LihatSuratSkck' component={LihatSuratSkck}
                        options={{ title: "Data Surat SKCK", headerShown: true }}
                        />
                        <Stack.Screen name='LihatSuratNikah' component={LihatSuratNikah}
                        options={{ title: "Data Surat Nikah", headerShown: true }}
                        />

            {/* //=====================Navigasi Tambahkan Saran ==================================// */}
            <Stack.Screen name='TambahSaran' component={TambahSaran}
                options={{ title: "Tulis Kritik", headerShown: true }}
            />
            <Stack.Screen name='LoginAdmin' component={LoginAdmin}
                options={{ title: "Tambah Saran Anda", headerShown: false }}
            />
            <Stack.Screen name='LoginSekretaris' component={LoginSekretaris}
                options={{ title: "Tambah Saran Anda", headerShown: false }}
            />

        </Stack.Navigator>
    )
}

const BottomTabs = () => {
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
                                    <Image source={require('../../asset/icon/Button/home.png')} style={{ height: 30, width: 30 }} />
                                    :
                                    <Image source={require('../../asset/icon/Button/home-active.png')} style={{ height: 30, width: 30 }} />
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
                                    <Image source={require('../../asset/icon/Button/document.png')} style={{ height: 30, width: 30 }} />
                                    :
                                    <Image source={require('../../asset/icon/Button/document-active.png')} style={{ height: 30, width: 30 }} />
                            }
                        </View>
                    )
                }} />
            {/* <MaterialBottom.Screen name="Bumdes" component={Bumdes}
                options={{//untuk mengatur Botton =========================
                    tabBarLabel: 'Bumdes',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                //Biar beda warna pas di klik==============
                                color == "#676767" ?
                                    <Image source={require('../../asset/icon/Button/shop.png')} style={{ height: 30, width: 30 }} />
                                    :
                                    <Image source={require('../../asset/icon/Button/shop-active.png')} style={{ height: 30, width: 30 }} />
                            }
                        </View>
                    )
                }} /> */}
            <MaterialBottom.Screen name="Saran" component={Saran}
                options={{ //untuk mengatur Botton =========================
                    tabBarLabel: 'Kritik',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                //Biar beda warna pas di klik============
                                color == "#676767" ?
                                    <Image source={require('../../asset/icon/Button/comment.png')} style={{ height: 30, width: 30 }} />
                                    :
                                    <Image source={require('../../asset/icon/Button/comment-active.png')} style={{ height: 30, width: 30 }} />
                            }
                        </View>
                    )
                }} />
                 <MaterialBottom.Screen name="Faq" component={Faq}
                options={{ //untuk mengatur Botton =========================
                    tabBarLabel: 'FAQ',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                //Biar beda warna pas di klik============
                                color == "#676767" ?
                                    <Image source={require('../../asset/icon/Button/question.png')} style={{ height: 30, width: 30 }} />
                                    :
                                    <Image source={require('../../asset/icon/Button/question(1).png')} style={{ height: 30, width: 30 }} />
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
            <NavigationContainer>
                <HomeStack />
            </NavigationContainer>
        )
    }
}
export default index