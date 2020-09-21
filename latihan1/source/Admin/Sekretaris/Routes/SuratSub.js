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
    },
    textFiturDesa1:{
        position:'absolute',
        marginLeft:180,
        marginTop:10,
        backgroundColor:'red',
        borderRadius:50,
        width:30,
        height:30,
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        borderColor:'white',
        borderWidth:3
    },
    textFiturDesa2:{
        color:'white',
        fontWeight:'bold',
    }
})

class SuratSub extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.4}  onPress={this.props.onPress}>
                <Text style={styles.textFiturDesa}>{this.props.title}</Text>
                <View style={styles.textFiturDesa1}>
                </View>
            </TouchableOpacity>
        )
    }
}

export default SuratSub