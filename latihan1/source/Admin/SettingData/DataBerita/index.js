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
    ActivityIndicator, ScrollView
} from "react-native";
import TambahBerita from './TambahBerita';
import { Table, Row, Rows } from 'react-native-table-component';

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
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>
                        No KK
                    </Text>
                    <Text style={styles.TextData}>: {item.NoKk} </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>
                        NIK
                    </Text>
                    <Text style={styles.TextData}>: {item.NIK}</Text>
                </View>
            </ScrollView>
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
        const url = 'http://10.0.7.69/TugasAkhir/KelolaDataVerif.php'
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
                    <View >
                        <TambahBerita />
                    </View>
                    <FlatList backgroundColor='#F5F5DC'
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
        backgroundColor: "#fff"
    },
    Textnama: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    TextData: {
        flex: 1,
        flexDirection: 'row-reverse',
        position: 'absolute',
        marginRight: 150
    }
});