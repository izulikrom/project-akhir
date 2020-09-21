import React from 'react'
import { Image, Text, View, StyleSheet,Alert } from 'react-native'
import AdminSub from './AdminSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        marginTop: 90,
    }
})
const Surat = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <AdminSub onPress={() => NavigationSurat.navigate('KelolaData')}title="Kelolah Data" />
            <AdminSub onPress={() => NavigationSurat.navigate('SekretarisAdmin')}title="Kelola Sekretaris" />
            <AdminSub onPress={() => NavigationSurat.navigate('SettingSaran')}title="Kritik" />
            <AdminSub onPress={() => NavigationSurat.navigate('Login')}title="LogOut !"/>
        </View>
    )
}

export default Surat