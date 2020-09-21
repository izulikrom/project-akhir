import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    textFiturDesa: {
        padding: 12,
        marginTop: 20,
        backgroundColor: 'orange',
        color: '#F5F5DC',
        width: 200,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

class SuratSub extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ width: '25%', alignItems: 'center'}}>
                <Text style={styles.textFiturDesa}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default SuratSub