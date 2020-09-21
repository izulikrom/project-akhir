import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import DataSub from './DataSub';
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
            <DataSub onPress={() => NavigationSurat.navigate('DataVerif')}title="Kelolah Data Verifikasi User" />
            <DataSub onPress={() => NavigationSurat.navigate('DataJadwal')}title="Kelola Jadwal" />
            <DataSub onPress={() => NavigationSurat.navigate('SettingBerita')}title="Kelola Berita" />
        </View>
    )
}

export default Surat