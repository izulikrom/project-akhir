import React, { Component, useCallback } from 'react';
import { AppRegistry, StyleSheet, Text, View, Vibration, FlatList, Image, Button, TouchableOpacity, Modal, Linking } from 'react-native';
import flatlistData from './Berita';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};

class FlatListItem extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? '#F0F8FF' : '#00FFFF'
                    //backgroundColor: 'white'
                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 200, height: 100, margin: 5, borderRadius: 1 }}>
                    </Image>
                    <View style={{
                        flex: 1,
                        flexDirection: "column"
                    }}>
                        <Text style={styles.FlatListItem}>{this.props.item.judul} </Text>
                        <View style={{ marginLeft: 1, marginBottom: 8, flexDirection: 'row' }}>
                            <Image style={styles.imagecalender} source={require('../../../asset/icon/calendar.png')} />
                            <Text style={{ marginLeft: 5, fontSize: 13, color: '#575757', marginTop: 7 }}>{this.props.item.calendar}</Text>
                        </View>
                        <View style={{ backgroundColor: 'red' }}>
                            <OpenURLButton url={this.props.item.link}>Selengkapnya</OpenURLButton>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    FlatListItem: {
        color: 'black',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'

    },
    imagecalender: {
        height: 20,
        width: 20,
        marginTop: 5,
        marginLeft: 1
    },
    btnTutup: {
        backgroundColor: "#2196F3",
        marginTop: 210,
        borderRadius: 10,
        padding: 10,
        position: 'absolute',
        marginLeft: 180

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

});
export default class BasicFlatlistData extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    data={flatlistData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index}></FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        )
    }
}
