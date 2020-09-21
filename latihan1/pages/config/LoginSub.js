import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity,TouchableHighlight } from 'react-native'


const styles = StyleSheet.create({
    imageFiturUtama: {
        height: 55,
        width: 55,
        marginTop: 30
    },
    textFiturDesa: {
        fontWeight: 'bold',
        color:'white',
    }
})

class LoginSub extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <Text style={styles.textFiturDesa}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default LoginSub