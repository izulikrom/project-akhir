import React, { Component } from 'react'
import {
    StyleSheet, View,
    Alert,
    TextInput,
    Button,
    Text,
    Platform,
    TouchableOpacity,
    ListView, FlatList,
    ActivityIndicator
} from "react-native";

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true,
            
        }
    }

    renderItem = ({ item }) => {
        return (
            <View >
               <Text style={styles.TextData}>{item.jumlah} </Text>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://10.0.7.69/TugasAkhir/LihatJumlah/LihatJumlahNikah.php'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
                <View style={styles.Container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                    />
                </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Textnama:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
        
    },
    TextData:{
        color:'white',
        fontWeight:'bold',
         }
});