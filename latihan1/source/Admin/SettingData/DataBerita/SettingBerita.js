import React, { Component, useCallback } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking, Alert, Button, Modal, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../../../page/Home/Berita/Berita';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import Editmodal from './EditBerita';
import { } from '@react-navigation/stack'

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
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            show: false
        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, flexDirection) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        //alert("update");
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary', backgroundColor: 'limegreen', color: 'red', fontWeight: 'bold'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'PERHATIAN',
                            'apakah kamu yakin akan mememesan???',
                            [{ text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {
                                text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }
                            },
                            ],
                            { cancelable: true }
                        )

                    },
                    text: 'Delete', type: 'Delete', backgroundColor: 'red', color: 'yellow', fontWeight: 'bold'
                }
            ],
            rowId: this.props.index,
            SelectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    height: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? '#98E363' : '#66B032'
                        //backgroundColor:'#C45BAE',

                    }}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 120, height: 120, margin: 5, borderRadius: 5 }}
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
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
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>
            </Swipeout>
        )
    }
}


export default class BasicFlatListData extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deleteRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activedKey
            };
        });
    }
    _onPressAdd() {
        //alert("berhasil Ditambah")
        this.refs.AddModal.showAddModal();
    }
    render() {
        return (

            <View style={{ flex: 1}}>
                <View>
                    <AddModal ref={'AddModal'} parentFlatList={this}>
                    </AddModal></View>
                <View
                    style={{
                        backgroundColor: 'rgb(247, 176, 70)',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        underlayColor='blue'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../../../asset/icon/plus4.png')}
                        />

                    </TouchableOpacity>
                </View>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>
                        );
                    }}>
                </FlatList>
                <AddModal ref={'AddModal'} parentFlatList={this}>
                </AddModal>
                <Editmodal ref={'editModal'} parentFlatList={this}>
                </Editmodal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'yellow',
        fontWeight: 'bold',
        padding: 7,
        fontSize: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    flatListItemCd: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
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
    flatListItem: {
        color: 'yellow',
        fontWeight: 'bold',
        padding: 7,
        fontSize: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    flatListItemCd: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    }
});