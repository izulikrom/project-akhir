import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import SuratSub from './SuratSub';
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
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratDomisili')}title="Surat Domisili" />
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratTM')}title="Surat Keterangan Tidak mampu" />
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratPD')}title="Surat Pindah Penduduk" />
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratKtp')}title="Surat Pengantar Pengurus KTP" />
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratSkck')}title="Surat Pengantar Pembuatan SKCK" />
            <SuratSub onPress={() => NavigationSurat.navigate('LihatSuratNikah')}title="Suarat Pengatar Nikah" />
        </View>
    )
}

export default Surat