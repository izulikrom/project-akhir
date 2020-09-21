import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import TambahBeritaSub from './TambahBeritaSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        backgroundColor:'white'
    }
})
const TambahSaran = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <TambahBeritaSub onPress={() => NavigationSurat.navigate('TambahBerita')}title="Tambahkan Berita" />
        </View>
    )
}

export default TambahSaran