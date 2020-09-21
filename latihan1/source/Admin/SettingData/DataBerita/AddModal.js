import React, { Component } from 'react';
import {
    AppRegistry, View, Text, StyleSheet,
    FlatList, Image, Dimensions, Platform, TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../../../page/Home/Berita/Berita';


var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newJudul: '',
            newImage: '',
            newCalender: '',
            newHalaman: '',
        };
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={"myModal"}

                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'android' ? 30 : 0,
                    shadowRadius: 5,
                    width: screen.width - 120,
                    height: 480,
                    backgroundColor: 'rgb(247, 176, 70)'
                }}
                position='Center'
                backdrop={true}
                onClosed={() => {
                    //alert("Modal Ditutup")
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#364049',
                        textAlign: 'center',
                        marginTop: 10
                    }}
                >Tambah </Text>
                <TextInput
                    multiline
                    style={styles.txt}
                    onChangeText={(text) => this.setState({ newJudul: text })}
                    placeholder="Tambahkan Judul"
                    value={this.state.newJudul}
                />
                <TextInput
                    multiline
                    style={styles.txt}
                    onChangeText={(text) => this.setState({ newImage: text })}
                    placeholder="Tambahkan Gambar"
                    value={this.state.newImage}
                />
                <TextInput
                   style={styles.txt}
                    onChangeText={(text) => this.setState({ newCalender: text })}
                    placeholder="Tambahkan Tanggal"
                    value={this.state.newCalender}
                />
                <TextInput
                    multiline
                    style={styles.txt}
                    onChangeText={(text) => this.setState({ newLink: text })}
                    placeholder="Tambahkan Link"
                    value={this.state.newLink}
                />
                <Button
                    style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        heigt: 40,
                        borderRadius: 6,
                        backgroundColor: '#364049'
                    }}
                    onPress={() => {
                        if (this.state.newJudul.length == 0 || this.state.newImage.length == 0 || this.state.newCalender.length == 0 || this.state.newLink.length == 0) {
                            alert("Harap Diisi Ulang Kembali");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            judul: this.state.newJudul,
                            imageUrl: this.state.newImage,
                            calendar: this.state.newCalender,
                            link: this.state.newLink
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }
                    }
                > Save</Button>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    txt: {
        height: 80,
        borderBottomColor: '#364049',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
    }
});