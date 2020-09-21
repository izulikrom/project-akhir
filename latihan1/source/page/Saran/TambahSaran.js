import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import TambahSaranSub from './TambahSaranSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        marginTop: 5,
        backgroundColor:'white'
    }
})
const TambahSaran = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <TambahSaranSub onPress={() => NavigationSurat.navigate('TambahSaran')}title="Tulis Kritik Anda" />
        </View>
    )
}

export default TambahSaran