import React, { Component } from 'react';
import {
    AppRegistry, View, Text, StyleSheet,
    FlatList, imageUrl, Dimensions, Platform, TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './Data';


var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EditimageUrl: '',
        };
    }

    showEditModal = (editingJadwal, flatListItem) => {
        // console.log('editingJadwal =${JSON.stringify(editingJadwal)}');//Untuk mengetes program bisa masuk apa tidak
        this.setState({
            key: editingJadwal.key,
            EditimageUrl: editingJadwal.imageUrl,
            flatListItem: flatListItem
        });
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
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 400,
                    backgroundColor: 'orange', borderRadius: 15,
                }}
                position='Center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal Ditutup")
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
                >Update Jadwal</Text>
                <TextInput multiline
                    style={styles.txt}
                    onChangeText={(text) => this.setState({ EditimageUrl: text })}
                    placeholder="Edit Gambar"
                    value={this.state.EditimageUrl}
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
                        if (this.state.EditimageUrl.length == 0) {
                            alert("Harap Diisi Ulang Kembali");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return;
                        }
                        flatListData[foundIndex].judul = this.state.EditJudul;
                        flatListData[foundIndex].imageUrl = this.state.EditimageUrl;
                        //  this.state.FlatListItem.refreshFlatList();
                        //supaya saaat sudah di tambah maka "form" nya akan close sendiri                
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
        height: 300,
        borderBottomColor: '#364049',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
    }
});
