import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import TambahVerifSub from './TambahVerifSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        backgroundColor:'white',
        marginTop:10,
        marginBottom:5
    }
})
const TambahSaran = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <TambahVerifSub onPress={() => NavigationSurat.navigate('TambahVerif')}title="Tambahkan Data" />
            <View
                style={{ height: 2, width: '100%', backgroundColor: 'skyblue' }}>
            </View>
        </View>
        
    )
}

export default TambahSaran