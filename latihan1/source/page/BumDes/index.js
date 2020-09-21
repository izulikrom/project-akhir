import React from 'react';
import {
    StyleSheet, View,
    Alert,
    TextInput,
    Button,
    Text,
    Platform,
    TouchableOpacity,
    ListView, FlatList, Image,
    ActivityIndicator, ScrollView, RefreshControl,ImageBackground
} from "react-native";
import Loading from 'react-native-whc-loading';

export default class App extends React.Component {
    state = {
        items: [],
        isLoading: false
    }

    renderRow = ({ item }) => {
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                        {/* <Image source={require('../../asset/icon/user.png')} style={{ height: 20, width: 20 }} /> */}
                        <Text style={styles.TextData}> {item.nama} </Text>
                        <Text style={styles.TextData1}> {item.waktu} </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                        {/* <Image source={require('../../asset/icon/share.png')} style={{ height: 20, width: 20 }} /> */}
                        <Text style={[styles.TextData, { fontWeight: 'normal', marginHorizontal: 10 }]}> {item.kepada}</Text>
                    </View>
                    <Text
                        multiline
                        style={styles.txtInput}>
                        <Text style={{color:'grey',position:'absolute', fontWeight: 'normal' }}> {item.saran}</Text>
                    </Text>
                </View>
                <Loading ref="loading" />
            </ScrollView>
        )
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        let API_URL = 'http://10.0.7.69/TugasAkhir/LihatSaran.php';
        this.setState({ isLoading: true })
        fetch(API_URL).then(res => res.json()).then(res => {
            this.setState({ items: res })
        }).finally(() => this.setState({ isLoading: false }))
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
                     {/* <ImageBackground source={require('../../asset/images/BK1.jpg')} style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: 'center',
                }}> */}
                   
                    <FlatList 
                    // backgroundColor='#F5F5DC'
                        data={this.state.items}
                        renderItem={this.renderRow}
                        refreshing={this.state.isLoading}
                        onRefresh={this.getData}
                        keyExtractor={(i, k) => k.toString()}
                    />
                    {/* </ImageBackground> */}
                </View>
        )
    }
}
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        color: 'grey'
    },
    Container: {
        flex: 1,
        paddingTop: 10,
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
        marginRight: 30,
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold'
    },
    TextData1: {
        flex: 1,
        flexDirection: 'row-reverse',
        position: 'absolute',
        marginRight: 270,
        color: 'grey',
        fontSize: 12
    },
    txtInput: {
        height: 100,
        width: 345,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'orange',
        backgroundColor: 'white',
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 10
    },
});
