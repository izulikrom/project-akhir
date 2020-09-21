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
            <SuratSub onPress={() => NavigationSurat.navigate('SuratDomisili')}title="Surat Domisili" />
            <SuratSub onPress={() => NavigationSurat.navigate('SuratTidakMampu')}title="Surat Keterangan Tidak mampu" />
            <SuratSub onPress={() => NavigationSurat.navigate('SuratPindah')}title="Surat Pindah Penduduk" />
            <SuratSub onPress={() => NavigationSurat.navigate('PengantarKtp')}title="Surat Pengantar Mengurus KTP" />
            <SuratSub onPress={() => NavigationSurat.navigate('PengantarSkck')}title="Surat Pengantar Mengurus SKCK" />
            <SuratSub onPress={() => NavigationSurat.navigate('PengantarNikah')}title="Surat Pengatar Nikah" />
            {/* <SuratSub onPress={() => NavigationSurat.navigate('Lainnya')}title="Lainnya" /> */}
        </View>
    )
}

export default Surat