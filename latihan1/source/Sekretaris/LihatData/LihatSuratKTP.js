import React from 'react';
import {
    StyleSheet, View,
    Alert,
    TextInput,
    Button,
    Text,
    Platform,
    TouchableOpacity,
    ListView, FlatList,
    ActivityIndicator
} from "react-native";

export default class App extends React.Component {
  state = {
    items: [],
    isLoading: false
  }

  renderRow = ({ item }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={styles.Textnama}>{item.nama}  ( {item.no_hp} )</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Nama Lengkap
            </Text>
        <Text style={styles.TextData}>: {item.nama} </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Nomor KK
            </Text>
        <Text style={styles.TextData}>: {item.NoKk}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                NIK
            </Text>
        <Text style={styles.TextData}>: {item.Nik}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Golongan Darah
            </Text>
        <Text style={styles.TextData}>: {item.GolDar}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Jenis Kelamin
            </Text>
        <Text style={styles.TextData}>: {item.jk}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Tempat, Tanggal lahir
            </Text>
        <Text style={styles.TextData}>: {item.Tempat_Lhr}, {item.tgl_lahir}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Pekerjaan
            </Text>
        <Text style={styles.TextData}>: {item.pekerjaan}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Agama
            </Text>
        <Text style={styles.TextData}>: {item.Agama}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Kewarganegaraan
            </Text>
        <Text style={styles.TextData}>: {item.Kewarganegaraan}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Status Perkawinan
            </Text>
        <Text style={styles.TextData}>: {item.status_kawin}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Alamat
            </Text>
        <Text style={styles.TextData}>: {item.Alamat}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Waktu
            </Text>
        <Text style={styles.TextData}>: {item.waktu}</Text>
        </View>
    </View>
    )
  }
  renderSeparator = () => {
    return (
        //Buat Garis======================================================
        <View
            style={{ height: 1, width: '100%', backgroundColor: 'skyblue' }}>

        </View>
    )
}

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    let API_URL = 'http://10.0.7.69/TugasAkhir/LihatKtp.php';
    this.setState({isLoading:true})
    fetch(API_URL).then(res => res.json()).then(res => {
      this.setState({ items: res })
    }).finally(()=> this.setState({isLoading:false}))
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 10}}>
        <FlatList
          data={this.state.items}
          renderItem={this.renderRow}
          refreshing={this.state.isLoading}
          onRefresh={this.getData}
          keyExtractor={(i, k) => k.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    Textnama: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20

    },
    TextData: {
        flex: 1, flexDirection: 'row-reverse', position: 'absolute', marginRight: 150
    }
});