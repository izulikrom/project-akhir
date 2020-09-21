import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker, StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableHighlight } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Loading from 'react-native-whc-loading'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                nama:'',
                NoKk: '',
                NIK:'',
            }
        }
    }
    render() {
        const { nama,NoKk,NIK } = this.state.formData;
        return (
            <ScrollView backgroundColor=' 	#F5F5DC'>
                <KeyboardAvoidingView style={styles.container} enabled>
                <View  style={styles.row}>
                        <Text style={styles.label} >Nama</Text>
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="number-pad"
                            onChangeText={nama =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        nama
                                    }
                                }))
                            }
                            value={nama}
                            onPress={(value) => { this.setState({ value: value }) }}
                        /></View>
                    <View  style={styles.row}>
                        <Text style={styles.label} >No KK</Text>
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="number-pad"
                            onChangeText={NoKk =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        NoKk
                                    }
                                }))
                            }
                            value={NoKk}
                            onPress={(value) => { this.setState({ value: value }) }}
                        /></View>
                        <View style={styles.row}>
                        <Text style={styles.label} >NIK</Text>
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="number-pad"
                            onChangeText={NIK =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        NIK
                                    }
                                }))
                            }
                            value={NIK}
                        />
                    </View>
                    {/*BUTTON */}
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={this._saveData}
                            style={styles.btnContainer}>
                            <Text style={styles.txtBtn}>Tambahkan Data</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
                {/*================================================= Loading//          */}
                <Loading ref="loading" />
            </ScrollView>
        );
    }
    _saveData = async () => {
        this.refs.loading.show();
        try {
            await fetch('http://10.0.7.69/TugasAkhir/TambahVerif.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.formData),
            })
                .then((response) => response.json())
                .then((json) => {
                    //return json.movies;
                    setTimeout(() => {
                        this.refs.loading.close();
                        alert("Data Tersimpan");
						this.props.navigation.navigate("DataVerif");
                    }, 2000);
                })
                .catch((error) => {
                    this.refs.loading.close();
                    console.error(error);
                });
        } catch (error) {
            this.refs.loading.close();
            alert(error)
        }


    };
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        
    },
    row: {
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        color: 'grey',
        
    },
    btnContainer: {
        backgroundColor: 'orange',
        padding: 10,
        alignItems: 'center',
        width:200,
        borderRadius:5,
        alignContent:'center',
        marginLeft:90
    },
    txtBtn: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
    },
    txtInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'orange',
        backgroundColor:'white'
    },
    txtTtl: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'orange',
        backgroundColor:'white'
    },
    txtAlamat: {
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'orange',
        backgroundColor:'white'
    }
});