import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import SuratSub from './SuratSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        marginTop: 30,
    }
})
const Surat = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <SuratSub onPress={() => NavigationSurat.navigate('Login')}title="LogOut" />
        </View>
    )
}

export default Surat