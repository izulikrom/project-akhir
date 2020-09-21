import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity,TouchableHighlight } from 'react-native'


const styles = StyleSheet.create({
    imageFiturUtama: {
        height: 55,
        width: 55,
    },
    textFiturDesa: {
        padding: 12,
        backgroundColor: 'orange',
        color: 'white',
        width: 200,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

class TambahSuratSub extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ width: '25%', alignItems: 'center',marginLeft:50 }}>
                <Text style={styles.textFiturDesa}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default TambahSuratSub