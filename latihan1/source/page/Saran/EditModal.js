import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,
FlatList,Image, Dimensions, Platform,TextInput
} from 'react-native';

import Modal from'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './data/flatListData';


var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state={
            foodName:'',
            foodImage:'',
            foodDescription:''
        };
    }

    showEditModal=(editingFood, flatListItem)=> {
        // console.log('editingFood =${JSON.stringify(editingFood)}');//Untuk mengetes program bisa masuk apa tidak
        this.setState({
            key :editingFood.key,
            foodName :editingFood.name,
            foodImage :editingFood.imageUrl,
            foodDescription :editingFood.description,
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
                style={{
                    height: 50,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop:20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({foodName:text})}
                placeholder="Edit Menu"
                value={this.state.foodName}
                />
                 <TextInput multiline
                style={{
                    height: 120,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop:20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({foodImage:text})}
                placeholder="Edit Gambar"
                value={this.state.foodImage}
                />
                 <TextInput multiline
                style={{
                    marginTop:100,
                    height: 120,
                    borderBottomColor:'#364049',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop:20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({foodDescription:text})}
                placeholder="Tambahkan Deskripsi Menu"
                value={this.state.foodDescription}
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
                    if(this.state.foodName.length == 0 || this.state.foodImage.length == 0 || this.state.foodDescription.length ==0){
                        alert("Harap Diisi Ulang Kembali");
                        return;
                    }
                    var foundIndex = flatListData.findIndex(item =>this.state.key == item.key);
                                    if (foundIndex < 0){
                                        return;
                                    }
                    flatListData[foundIndex].name = this.state.foodName;
                    flatListData[foundIndex].imageUrl = this.state.foodImage;
                    flatListData[foundIndex].description = this.state.foodDescription;
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
