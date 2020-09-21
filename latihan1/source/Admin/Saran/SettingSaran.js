import React, { Component } from 'react'
import {
    StyleSheet, View,
    Alert,
    TextInput,
    Button,
    Text,
    Platform,
    TouchableOpacity,
    ListView, FlatList, Image,
    ActivityIndicator, ScrollView
} from "react-native";

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            activeRowKey: null,
            dataSource: [],
            isLoading: true
        }
    }
    renderItem = ({ item }) => {
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row',marginLeft:10 }}>
                        <Image source={require('../../asset/icon/user.png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.TextData}> {item.nama} </Text>
                        <Text style={styles.TextData1}> {item.waktu} </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row',marginLeft:10,marginTop:10 }}>
                    <Image source={require('../../asset/icon/share.png')} style={{ height: 20, width: 20 }} />
                        <Text style={[styles.TextData,{fontWeight:'normal',marginHorizontal:10}]}> {item.kepada}</Text>
                    </View>
                    <Text
                    multiline
                     style={styles.txtInput}>
                        <Text style={[styles.TextData,{fontWeight:'normal'}]}> {item.saran}</Text>
                    </Text>
                </View>
            </ScrollView>
        )
    }
    renderSeparator = () => {
        return (
            //Buat Garis======================================================
            <View
                style={{ height: 2, width: '100%', backgroundColor: 'azure' }}>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://10.0.7.69/TugasAkhir/LihatSaran.php'
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
                    <View  >
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
        fontSize:16,
        fontWeight:'bold'
    },
    TextData1: {
        flex: 1,
        flexDirection: 'row-reverse',
        position: 'absolute',
        marginRight: 270,
        color: 'grey',
        fontSize:12
    },
    txtInput: {
        height: 100,
        width:345,
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'orange',
        backgroundColor:'white',
        marginLeft:40,
        marginTop:10,
        marginBottom:10
    },
});

// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View, ImageBackground, Image, Alert, Button, TouchableOpacity, Modal, Platform } from 'react-native';
// import flatListData from './data/flatListData';
// import Swipeout from 'react-native-swipeout';
// import Editmodal from './EditModal';
// import { } from '@react-navigation/stack'

// const image = { uri: "https://i.pinimg.com/474x/04/27/5f/04275fe3dcc15b2c7dbbd01853efbc88.jpg" };

// class FlatListItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeRowKey: null,
//             numberOfRefresh: 0,
//             datsSource: [],
//             show: false
//         };
//     }
//     render() {
//         const swipeSettings = {
//             autoClose: true,
//             onClose: (secId, rowId, flexDirection) => {
//                 if (this.state.activeRowKey != null) {
//                     this.setState({ activeRowKey: null });
//                 }
//             },
//             onOpen: (secId, rowId, direction) => {
//                 this.setState({ activeRowKey: this.props.item.key });
//             },
//             right: [
//                 {
//                     onPress: () => {
//                         //alert("update");
//                         this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
//                     },
//                     text: 'Edit', type: 'primary', backgroundColor: 'limegreen', color: 'red', fontWeight: 'bold'
//                 },
//                 {
//                     onPress: () => {
//                         const deletingRow = this.state.activeRowKey;
//                         Alert.alert(
//                             'PERHATIAN',
//                             'apakah kamu yakin akan mememesan???',
//                             [{ text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
//                             {
//                                 text: 'Yes', onPress: () => {
//                                     flatListData.splice(this.props.index, 1);
//                                     this.props.parentFlatList.refreshFlatList(deletingRow);
//                                 }
//                             },
//                             ],
//                             { cancelable: true }
//                         )

//                     },
//                     text: 'Delete', type: 'Delete', backgroundColor: 'red', color: 'yellow', fontWeight: 'bold'
//                 }
//             ],
//             rowId: this.props.index,
//             SelectionId: 1
//         };
//         return (
//             <Swipeout {...swipeSettings}>
//                 <View style={{
//                     flex: 1,
//                     flexDirection: 'column',
//                     height: 150,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}>


//                     <View style={{
//                         flex: 1,
//                         flexDirection: 'row',
//                         backgroundColor: this.props.index % 2 == 0 ? '#98E363' : '#66B032'
//                         //backgroundColor:'#C45BAE',

//                     }}>
//                         <Image
//                             source={{ uri: this.props.item.imageUrl }}
//                             style={{ width: 120, height: 120, margin: 5, borderRadius: 20 }}
//                         />
//                         <View style={{
//                             flex: 1,
//                             flexDirection: 'column',
//                         }}>
//                             <Text style={styles.flatListItem}>{this.props.item.kepada}</Text> 
//             <Text style={styles.flatListItemCd}>{this.props.item.description}</Text>
//                             <View style={{ flex: 1, flexDirection: 'column' }}>
//                                 <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
//                                     <Image source={require('../../asset/icon/user.png')} style={{ height: 20, width: 20 }} />
//                                     <Text style={styles.TextData}> {this.props.item.nama} </Text>
//                                     <Text style={styles.TextData1}> {this.props.item.waktu} </Text>
//                                 </View>
//                                 <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
//                                     <Image source={require('../../asset/icon/share.png')} style={{ height: 20, width: 20 }} />
//                                     <Text style={[styles.TextData, { fontWeight: 'normal', marginHorizontal: 10 }]}> {this.props.item.kepada}</Text>
//                                 </View>
//                                 <Text
//                                     multiline
//                                     style={styles.txtInput}>
//                                     <Text style={[styles.TextData, { fontWeight: 'normal' }]}> {this.props.item.saran}</Text>
//                                 </Text>
                                
//                             </View>
//                         </View>
//                     </View>
//                     <View style={{
//                         height: 1,
//                         backgroundColor: 'white'
//                     }}>

//                     </View>
//                 </View>
//             </Swipeout>

//         )
//     }
//     renderSeparator = () => {
//         return (
//             //Buat Garis======================================================
//             <View
//                 style={{ height: 2, width: '100%', backgroundColor: 'azure' }}>
//             </View>
//         )
//     }

//     componentDidMount() {
//         const url = 'http://10.0.7.69/TugasAkhir/LihatSaran.php'
//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     dataSource: responseJson,
//                     isLoading: false
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
// }

// const styles = StyleSheet.create({
//     flatListItem: {
//         color: 'yellow',
//         fontWeight: 'bold',
//         padding: 7,
//         fontSize: 20
//     },
//     image: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//     },
//     flatListItemCd: {
//         color: 'black',
//         fontWeight: 'bold',
//         fontSize: 12
//     }
// });
// export default class BasicFlatListData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = ({
//             deleteRowKey: null,
//         });
//         this._onPressAdd = this._onPressAdd.bind(this);
//     }
//     refreshFlatList = (activedKey) => {
//         this.setState((prevState) => {
//             return {
//                 deletedRowKey: activedKey
//             };
//         });
//     }
//     _onPressAdd() {
//         //alert("berhasil Ditambah")
//         this.refs.AddModal.showAddModal();
//     }
//     render() {
//         return (
//             this.state.isLoading
//                 ?
//                 <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                     <ActivityIndicator size="large" color="red" animating />
//                 </View>
//                 :
//                 <View style={styles.Container}>
//                     <View  >
//                     </View>
//                     <FlatList
//                         data={flatListData}
//                         renderItem={({ item, index }) => {
//                             return (
//                                 <FlatListItem
//                                  item={item} index={index} parentFlatList={this}>

//                                 </FlatListItem>
//                             );
//                         }}>
//                     </FlatList>
//                 </View>
//         );
//     }
// }