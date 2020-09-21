import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker, StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableHighlight, ImagePickerIOS } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Loading from 'react-native-whc-loading';
//upload gambar
import Images from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPekerjaan: ['Pelajar', 'Wiraswasta', 'Petani', 'PNS'],
            dataAgama: ['Islam', 'Ksiten', 'Hindu', 'Bhuda'],
            dataKewarganegaraan: ['Indonesia', 'Asing'],
            dataJk: [
                { label: 'Laki-laki', value: 0 },
                { label: 'Perempuan', value: 1 }
            ],
            //====Image==========
            // avatarSrc:{},
            formData: {
                nama: '',
                jk: 0,
                Ttl: '',
                NoKk: '',
                pekerjaan: 'Pelajar',
                Agama: 'Islam',
                Alamat: '',
                Kewarganegaraan: 'Indonesia',
                tgl_lahir: null,
            }
        }
    }
    render() {
        const { nama, Ttl, NoKk, Agama, Alamat, Kewarganegaraan, pekerjaan, tgl_lahir } = this.state.formData;
            <ScrollView>
                <KeyboardAvoidingView style={styles.container} enabled>
                    <View style={[styles.row, { alignItems: 'center' }]}>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Nama Lengkap</Text>
                        <TextInput
                            style={styles.txtInput}
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
                    <View style={styles.row}>
                        <Text style={[styles.label, { marginBottom: 10 }]}>Jenis Kelamin</Text>
                        <RadioForm
                            radio_props={this.state.dataJk}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            labelStyle={{ paddingRight: 15 }}
                            buttonColor={'#2196f3'}
                            animation={true}
                            useNativeDriver={true}
                            onPress={jk =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        jk
                                    }
                                }))
                            }
                        /></View>
                    <View >
                        <Text style={styles.label} >Tempat, Tanggal Lahir</Text>
                        <TextInput
                            multiline
                            style={styles.txtTtl}
                            onChangeText={Ttl =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Ttl
                                    }
                                }))
                            }
                            value={Ttl}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                        <DatePicker
                            style={{ width: 170 }}
                            date={tgl_lahir}
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
                                    position: 'absolute',
                                    right: 0,
                                    top: 4,
                                    marginLeft: 0
                                }
                            }}
                            onDateChange={tgl_lahir => {
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        tgl_lahir
                                    }
                                }))
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >No KK</Text>
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="email-address"
                            onChangeText={NoKk =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        NoKk
                                    }
                                }))
                            }
                            value={NoKk}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Pekerjaan</Text>
                        <Picker
                            selectedValue={pekerjaan}
                            style={{ height: 50 }}
                            onValueChange={pekerjaan =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        pekerjaan
                                    }
                                }))
                            }
                        >
                            {this.state.dataPekerjaan.map((item, index) => (
                                <Picker.Item
                                    key={index}
                                    label={item}
                                    value={item.toLowerCase()} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Agama</Text>
                        <Picker
                            selectedValue={Agama}
                            style={{ height: 50 }}
                            onValueChange={Agama =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Agama
                                    }
                                }))
                            }
                        >
                            {this.state.dataAgama.map((item, index) => (
                                <Picker.Item
                                    key={index}
                                    label={item}
                                    value={item.toLowerCase()} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Kewarganegaraan</Text>
                        <Picker
                            selectedValue={Kewarganegaraan}
                            style={{ height: 50 }}
                            onValueChange={Kewarganegaraan =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Kewarganegaraan
                                    }
                                }))
                            }
                        >
                            {this.state.dataKewarganegaraan.map((item, index) => (
                                <Picker.Item
                                    key={index}
                                    label={item}
                                    value={item.toLowerCase()} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Alamat Lengkap</Text>
                        <TextInput
                        multiline
                            style={styles.txtAlamat}
                            onChangeText={Alamat =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Alamat
                                    }
                                }))
                            }
                            value={Alamat}
                            onPress={(value) => { this.setState({ value: value }) }}
                        /></View>
                    {/*BUTTON */}
                    <Text style={styles.label} >
                        {/* {JSON.stringify(this.state.formData)} */}
                    </Text>
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={this._saveData}
                            style={styles.btnContainer}>
                            <Text style={styles.txtBtn}>Kirim</Text>
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
            await fetch('http://10.0.7.69/TugasAkhir/service_crud.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(this.state.formData),
            })
                .then((response) => response.text())
                .then((json) => {
                    //return json.movies;
                    setTimeout(() => {
                        this.refs.loading.close();
                        alert(JSON.stringify(json));
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
        marginTop: 30
    },
    row: {
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        color: 'grey'
    },
    btnContainer: {
        backgroundColor: 'skyblue',
        padding: 10,
        alignItems: 'center'
    },
    txtBtn: {
        fontSize: 20,
        color: 'white'
    },
    txtInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10
    },
    txtTtl: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 10
    },
    txtAlamat:{
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        
    }
});