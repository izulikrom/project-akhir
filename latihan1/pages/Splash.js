import React, { useEffect } from 'react'
import { ImageBackground, StatusBar, Text, View, StyleSheet } from 'react-native'
import image from '../source/asset/images/desakU.png'


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000)
    }, [navigation]);
    let { background } = styles;
    return (
        <ImageBackground source={image} style={background}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
