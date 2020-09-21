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
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={styles.Textnama}>{item.nama}</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>
                        Nama Lengkap
                    </Text>
                <Text style={styles.TextData}>: {item.count} </Text>
                </View>
            </View>
        )
    }
    renderSeparator = () => {
        return (
            //Buat Garis======================================================
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'skyblue' }}>

            </View>
        )
    }

    componentDidMount() {
        const url = 'http://10.0.7.69/TugasAkhir/LihatJumlah.php'
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
            this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="red" animating />
                </View>
                :
                <View style={styles.Container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff"
    },
    Textnama:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
        
    },
    TextData:{
         flex: 1, flexDirection: 'row-reverse', position: 'absolute', marginRight: 150
         }
});