import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker, StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableHighlight } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Loading from 'react-native-whc-loading'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPekerjaan: ['Belum Bekerja', 'Pelajar', 'Dokter', 'PNS', 'Nelayan', 'Wiraswasta', 'Petani', 'Lainnya'],
            dataAgama: ['Islam', 'Prosestan', 'Katolik', 'Hindu', 'Buddha'],
            dataKewarganegaraan: ['Indonesia', 'Asing'],
            dataJk: [
                { label: 'Laki-laki', value: 1 },
                { label: 'Perempuan', value: 2 }
            ],
            dataKawin: [
                { label: 'Menikah', value: 1 },
                { label: 'Belum Menikah', value: 2 }
            ],
            formData: {
                nama: '',
                Nik:'',
                jk: 1,
                tgl_lahir: null,
                Tempat_Lhr: '',
                NoKk: '',
                Agama: 'Islam',
                Kewarganegaraan: 'Indonesia',
                Alamat: '',
                pekerjaan: 'Belum Bekerja',
                KeDesa:'',
                KeKec:'',
                KeKab:'',
                KeProv:'',
                Alasan:'',
                status_kawin:2,
            }
        }
    }
    render() {
        const { nama, jk, tgl_lahir, Tempat_Lhr, NoKk,Nik, Agama, Kewarganegaraan, Alamat, pekerjaan,status_kawin,KeDesa,KeKec
        ,KeKab,KeProv } = this.state.formData;
        return (
            <ScrollView backgroundColor=' 	#F5F5DC'>
                <KeyboardAvoidingView style={styles.container} enabled>
                    <View  style={styles.row}>
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
                        <Text style={styles.label} >NIK</Text>
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
                        <Text style={styles.label} >No Kk</Text>
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
                        <Text style={[styles.label, { marginBottom: 10 }]}>Jenis Kelamin</Text>
                        <RadioForm
                            radio_props={this.state.dataJk}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            labelStyle={{ paddingRight: 15,color:'grey',fontWeight:'bold'}}
                            buttonColor={'orange'}
                            buttonInnerColor={'orange'}
                            buttonSize={25}
                            buttonOuterSize={25}
                            buttonStyle={{}}
                            buttonWrapStyle={{marginLeft: 10}}
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
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.label} >Tempat, Tanggal Lahir</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TextInput
                            multiline
                            style={styles.txtTtl}
                            onChangeText={Tempat_Lhr =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Tempat_Lhr
                                    }
                                }))
                            }
                            value={Tempat_Lhr}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                        <DatePicker
                            style={{ width: 200,marginLeft:10 }}
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
                                    right: 0,
                                    top: 0,
                                    marginLeft: 0,
                                    marginRight:40
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
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label} >Pekerjaan</Text>
                        <Picker
                            selectedValue={pekerjaan}
                            style={{ height: 50,width:200,color:'orange' }}
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
                            style={{ height: 50,width:200,color:'orange'}}
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
                            style={{ height: 50,width:200,color:'orange' }}
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
                        <Text style={[styles.label, { marginBottom: 10 }]}>Status Perkawinan</Text>
                        <RadioForm
                            radio_props={this.state.dataJk}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            labelStyle={{ paddingRight: 15,color:'grey',fontWeight:'bold'}}
                            buttonColor={'orange'}
                            buttonInnerColor={'orange'}
                            buttonSize={25}
                            buttonOuterSize={25}
                            buttonStyle={{}}
                            buttonWrapStyle={{marginLeft: 10}}
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
                    <View style={styles.row}>
                        <Text style={styles.label} >Alamat Asal</Text>
                        <TextInput
                            multiline
                            style={styles.txtAlamat}
                            keyboardType="email-address"
                            onChangeText={Alamat =>
                                this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        Alamat
                                    }
                                }))
                            }
                            value={Alamat}
                        />
                    </View>
                    {/*BUTTON */}
                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={this._saveData}
                            style={styles.btnContainer}>
                            <Text style={styles.txtBtn}>Kirim Pengajuan</Text>
                        </TouchableHighlight>
                                        {/* <Button
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
                }}onPress={() =>{
                    if(this.state.nama.length == 0 ){
                        alert("Harap Diisi Ulang Kembali");
                        return;
                    };
                    this._saveData
                }
            } > Save</Button> */}
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
                body: JSON.stringify(this.state.formData),
            })
                .then((response) => response.json())
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
        backgroundColor: '#FFE4C4',
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