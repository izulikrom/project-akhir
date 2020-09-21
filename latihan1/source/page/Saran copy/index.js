import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView, ImageBackground, Text, View, Vibration, FlatList, Image, Button, TouchableOpacity, TouchableHighlight, Modal, Dimensions } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import LogOut from './data/Surat'
const { height, width } = Dimensions.get('window')

class FlatListItem extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <Image
                    source={{ uri: this.props.item.Gotongroyong }}
                    style={{ width: '100%', height: 200, margin: 5, borderRadius: 20, marginVertical: 20, marginTop: 100 }}>
                </Image>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    FlatListItem: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 20,
        color: 'grey'
    },
    Container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    txt: {
        marginLeft: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    imageBanner: {
        height: 140, width: width,
    },
});
export default class App extends React.Component {
    /**
     * Log out an example event after zooming
     *
     * @param event
     * @param gestureState
     * @param zoomableViewEventObject
     */
    logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
        console.log('');
        console.log('');
        console.log('-------------');
        console.log('Event: ', event);
        console.log('GestureState: ', gestureState);
        console.log('ZoomableEventObject: ', zoomableViewEventObject);
        console.log('');
        console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
    }

    render() {
        return (
            <ImageBackground source={require('../../asset/images/BK1.jpg')} style={{ flex: 1, resizeMode: "cover", justifyContent: 'center' }}>

                <View >
                    <ImageBackground style={styles.imageBanner} source={require('../../asset/images/awan.jpg')} >
                        {/* <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                            <Image style={{ width: 40, height: 40, position: 'absolute', marginTop: 30, marginLeft: 360 }} source={require('../../asset/icon/Button/logout.png')} />
                            {/* <Text>LogOut</Text> */}
                        {/* </TouchableHighlight> */} 
                        <LogOut/>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 15, position:'absolute',marginTop:70}}>Berikut adalah beberapa pertanyaan yang mungkin ada pikirkan !</Text>
                    </ImageBackground></View>
                <View style={{ flex: 1 }}>
                    <ReactNativeZoomableView
                        maxZoom={1.5}
                        minZoom={0.5}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders={true}
                        onZoomAfter={this.logOutZoomState}
                        style={{
                            padding: 10,
                        }}
                    >
                        <View style={{ backgroundColor: 'orange', borderRadius: 15, opacity: 0.8 }}>
                            <ScrollView >
                                <View style={{ marginTop: 20 }}>
                                    <View >
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>1. Bagaimana cara infaq ? ?</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingRight: 5 }}>
                                        <Text style={styles.txt}>Buka aplikasi Ovo, Gopay, atau Dana.</Text>
                                        <Text style={styles.txt}>Scan barcode atau salin nomor hp yang tertera.</Text>
                                        <Text style={styles.txt}>Kirim nominal uang yang akan diinfaqkan.</Text>
                                    </View>
                                    <View >
                                        <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>2. Kemana dana yang diinfaqkan ?</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingRight: 5 }}>
                                        <Text style={styles.txt}>Dana akan di terima oleh pengurus masjid.</Text>
                                        <Text style={styles.txt}>Selanjutnya akan dipergunakan untuk keperluan Masjid Nurul Ilmi.</Text>
                                    </View>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>3. Kapan jadwal akan diperbarui ?</Text>
                                </View>
                                <View style={{ flex: 1, paddingRight: 5 }}>
                                    <Text style={styles.txt}>Untuk jadwal Musyawarah, Gotongroyong dan Posyandu akan di update setiap bulan.</Text>
                                    <Text style={styles.txt}>Sedangkan PosRonda akan diupdate setiap minggu.</Text>
                                </View>
                                <View >
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>4. Bagaimana cara membuat surat ?</Text>
                                </View>
                                <View style={{ flex: 1, paddingRight: 5 }}>
                                    <Text style={styles.txt}>Di menu "Surat" pilih surat apa yang akan dibuat.</Text>
                                    <Text style={styles.txt}>Isi colom-colom data diri asli anda *Tidak boleh ada yang kosong.</Text>
                                    <Text style={styles.txt}>Kalau sudah di isi klik tombol "Kirim Pengajuan".</Text>
                                    <Text style={styles.txt}>Secara otomatis akan terkirim ke Sekretaris desa, dan akan diproses.</Text>
                                    <Text style={styles.txt}>Jika sudah selesai akan dihubungi via WA.</Text>
                                </View>
                                <View >
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>5. Bagaimana cara mendapatkan surat yang telah dibuat ?</Text>
                                </View>
                                <View style={{ flex: 1, paddingRight: 5 }}>
                                    <Text style={styles.txt}>Jika sudah menerima WA dari Sekretaris silahkan datang ke kantor Desa.</Text>
                                    <Text style={styles.txt}>Selanjutnya akan dilayani oleh Sekretaris.</Text>
                                    <Text style={styles.txt}>* Catatan :</Text>
                                    <Text style={styles.txt}>Pada saat pengambilan surat harus membawa KTP asli yang sesui data.</Text>
                                </View>
                                <View >
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>6. Untuk apa menulis Kritik ?</Text>
                                </View>
                                <View style={{ flex: 1, paddingRight: 5, marginBottom: 20 }}>
                                    <Text style={styles.txt}>Kritik akan diterima oleh pihak yang ditujuh dan akan menjadi masukan.</Text>
                                </View>

                            </ScrollView></View>
                    </ReactNativeZoomableView>
                </View>
            </ImageBackground>

        );
    }
}