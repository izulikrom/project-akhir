import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,
FlatList,Image, Dimensions, Platform,TextInput
} from 'react-native';

import Modal from'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../../../page/Home/Berita/Berita';


var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state={
            EditJudul:'',
            EditImage:'',
            EditCalender:'',
            newHalaman: '',
        };
    }

    showEditModal=(editingBerita, flatListItem)=> {
        // console.log('editingBerita =${JSON.stringify(editingBerita)}');//Untuk mengetes program bisa masuk apa tidak
        this.setState({
            key :editingBerita.key,
            EditJudul :editingBerita.judul,
            EditImage :editingBerita.imageUrl,
            EditCalender :editingBerita.calendar,
            EditHalaman :editingBerita.link,
            flatListItem :flatListItem
        });
        this.refs.myModal.open ();
    }
    generateKey = (numberOfCharacters) => {
        return require ('random-string')({length: numberOfCharacters});
    }
    render(){
        return(
            <Modal
            ref={"myModal"}

            style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'android' ? 30 : 0,
                shadowRadius: 10,
                width: screen.width - 80,
                height:480,
                backgroundColor:'limegreen'
            }}
            position='Center'
            backdrop={true}
            onClosed={() =>{
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
                >Edit Menu Makanan</Text>
                <TextInput multiline
                style={styles.txt}
                onChangeText={(text) => this.setState({EditJudul:text})}
                placeholder="Edit Menu"
                value={this.state.EditJudul}
                />
                 <TextInput multiline
               style={styles.txt}
                onChangeText={(text) => this.setState({EditImage:text})}
                placeholder="Edit Gambar"
                value={this.state.EditImage}
                />
                 <TextInput multiline
               style={styles.txt}
                onChangeText={(text) => this.setState({EditCalender:text})}
                placeholder="Tambahkan Deskripsi Menu"
                value={this.state.EditCalender}
                />
                 <TextInput multiline
               style={styles.txt}
                onChangeText={(text) => this.setState({EditHalaman:text})}
                placeholder="Edit Halaman"
                value={this.state.EditHalaman}
                />
                <Button
                style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: 'white'
                }}
                containerStyle={{
                    padding:8,
                    marginLeft: 70,
                    marginRight: 70,
                    heigt: 40,
                    borderRadius: 6,
                    backgroundColor: '#364049'
                }}
                onPress={() =>{
                    if(this.state.EditJudul.length == 0 || this.state.EditImage.length == 0 || this.state.EditCalender.length ==0 || this.state.EditHalaman.length ==0){
                        alert("Harap Diisi Ulang Kembali");
                        return;
                    }
                    var foundIndex = flatListData.findIndex(item =>this.state.key == item.key);
                                    if (foundIndex < 0){
                                        return;
                                    }
                    flatListData[foundIndex].judul = this.state.EditJudul;
                    flatListData[foundIndex].imageUrl = this.state.EditImage;
                    flatListData[foundIndex].calendar = this.state.EditCalender;
                    flatListData[foundIndex].link = this.state.EditHalaman;
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
        height: 80,
        borderBottomColor: '#364049',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
    }
});
