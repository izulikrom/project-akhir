import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import SuratSub from './SuratSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        flexDirection: 'row',
        marginTop:20,
        marginLeft:250,
        marginBottom:2
    }
})
const Surat = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <View>
            <SuratSub onPress={() => NavigationSurat.navigate('LoginAdmin')}title="Admin" />
            </View>
            <View>
            <SuratSub onPress={() => NavigationSurat.navigate('LoginSekretaris')}title="Sekretaris" />
            </View>
            {/* <SuratSub onPress={() => NavigationSurat.navigate('Kasir')}title="Kasir" /> */}
        </View>
    )
}

export default Surat