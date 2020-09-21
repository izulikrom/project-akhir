import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity,Alert } from 'react-native';
const styles = StyleSheet.create({
    textFiturDesa: {
        // position:'absolute',
        marginLeft:355,
        marginTop:40
    },
    textFiturDesa2:{
        color:'white',
        fontWeight:'bold',
    }
})

class SuratSub extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.4}  onPress={this.props.onPress} >
                <Image style={{ width: 40, height: 40, position: 'absolute', marginLeft: 360 }} source={require('../../../asset/icon/Button/logout.png')} />
                <Text style={styles.textFiturDesa} >{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default SuratSub