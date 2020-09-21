import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import LoginSub from './config/LoginSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
		width: 350,
		padding: 10, 
		backgroundColor: 'skyblue',
		alignItems: 'center',
		alignContent: 'center',
		marginTop:20
    }
})
const ButtonLogin = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <LoginSub onPress={() => NavigationSurat.navigate('Daftar')}title="Daftar" />
        </View>
    )
}

export default ButtonLogin