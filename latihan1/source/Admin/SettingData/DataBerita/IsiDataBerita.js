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
                gambar: '',
                judul:'',
                descripsi:'',
                tanggal:'',
            }
        }
    }
    render() {
        const { gambar,judul,descripsi,tanggal} = this.state.formData;
        return (
            <ScrollView backgroundColor=' 	#F5F5DC'>
                <KeyboardAvoidingView style={styles.container} enabled>
                    <View  style={styles.row}>
                        <Text style={styles.label} >Judul</Text>
                        <TextInput
                        multiline
                            style={styles.txtInput}
                            keyboardType="email-address"
                            onChangeText={judul =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        judul
                                    }
                                }))
                            }
                            value={judul}
                            onPress={(value) => { this.setState({ value: value }) }}
                        /></View>
                        <View style={styles.row}>
                        <Text style={styles.label} >Gambar</Text>
                        <TextInput
                        multiline
                            style={styles.txtGambar}
                            keyboardType="email-address"
                            onChangeText={gambar =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        gambar
                                    }
                                }))
                            }
                            value={gambar}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Descripsi</Text>
                        <TextInput
                        multiline
                            style={styles.txtDescripsi}
                            keyboardType="email-address"
                            onChangeText={descripsi =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        descripsi
                                    }
                                }))
                            }
                            value={descripsi}
                        />
                    </View>
                    {/* <View style={styles.row}>
                        <Text style={styles.label} >Tanggal</Text>
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="email-address"
                            onChangeText={tanggal =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        tanggal
                                    }
                                }))
                            }
                            value={tanggal}
                        />
                    </View> */}
                     <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.label} >Tanggal</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                        <DatePicker
                            style={{ width: 200,marginLeft:10,marginBottom:20 }}
                            date={tanggal}
                            mode="date"
                            placeholder="Pilih Tanggal"
                            format="DD-MM-YYYY"
                            minDate="01-01-1965"
                            maxDate="01-01-2065"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            useNativeDriver="true"
                            customStyles={{
                                dateIcon: {
                                    right: 0,
                                    top: 0,
                                    marginLeft: 0,
                                    marginRight:40
                                }
                            }}
                            onDateChange={tanggal => {
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        tanggal
                                    }
                                }))
                            }}
                        />
                    </View>
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
            await fetch('http://10.0.7.69/TugasAkhir/TambahBerita.php', {
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
						this.props.navigation.navigate("SettingBerita");
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
    },
    txtDescripsi:{
        height: 400,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'orange',
        backgroundColor:'white'
    },
    txtGambar:{
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'orange',
        backgroundColor:'white'
    }
});