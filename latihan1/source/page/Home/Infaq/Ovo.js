import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,TextInput,
    View, Image
} from "react-native";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={styles.ImageQr} source={require('../../../asset/images/ovoqr.jpg')} />
                        
                        <TextInput style={{
                            borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5,
                            marginBottom: 5
                        }}>
                            <Text style={{ color: 'black', fontWeight: 'normal' }}>083165842146</Text>
                        </TextInput><TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                style={styles.openDana}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Image style={styles.payImage} source={require('../../../asset/icon/ovo1.jpg')} />
            </TouchableHighlight>
            <Text style={{ alignSelf: 'center', marginTop: 5,fontWeight:'bold',color:'black' }}>Ovo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        marginTop:10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    payImage: {
        height: 45,
        width: 45,
        marginTop: 17,
        marginHorizontal: 40
    },
    ImageQr:{
        height:200,
        width:200
    }
});

export default App;
