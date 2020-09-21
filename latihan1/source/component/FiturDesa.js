import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import FiturUtamaSub from './FiturDesaSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        flexWrap: 'wrap',
        width: '100%'
    }
})
const FiturDesa = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <FiturUtamaSub onPress={() => navigation.navigate('Musyawara')} Image={require('../asset/icon/mus2.jpg')} title="Musyawarah" />
            <FiturUtamaSub onPress={() => navigation.navigate('Gotongroyong')} Image={require('../asset/icon/got.jpg')} title="Gotongroyong" />
            <FiturUtamaSub onPress={() => navigation.navigate('Posyandu')} Image={require('../asset/icon/pos.jpg')} title="Posyandu" />
            <FiturUtamaSub onPress={() => navigation.navigate('PosRonda')} Image={require('../asset/icon/ronda.jpg')} title="Pos Ronda" />
        </View>
    )
}

export default FiturDesa