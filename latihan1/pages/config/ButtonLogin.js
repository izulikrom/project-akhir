import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import LoginSub from './LoginSub';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    wrapperFitutDesa: {
        marginTop: 20,
        backgroundColor:'white'
    }
})
const ButtonLogin = () => {
    const NavigationSurat = useNavigation();
    return (
        <View style={styles.wrapperFitutDesa}>
            <LoginSub onPress={() => NavigationSurat.navigate('Login')}title="Login" />
            <LoginSub onPress={() => NavigationSurat.navigate('Register')}title="Register" />
            <LoginSub onPress={() => NavigationSurat.navigate('Daftar')}title="Register" />
        </View>
    )
}

export default ButtonLogin