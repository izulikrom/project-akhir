import React, { Component } from 'react'
import { StyleSheet, View, Image,ImageBackground, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Surat from './Routes/Surat';
import JumlahDomisili from './JumlahData/LihatJumlahDomisili';
import JumlahTM from './JumlahData/LihatJumlahTM';
import JumlahKtp from './JumlahData/LihatJumlahKtp';
import JumlahPD from './JumlahData/LihatJumlahPD';
import JumlahSkck from './JumlahData/LihatJumlahSkck';
import JumlahNikah from './JumlahData/LihatJumlahNikah';

const { height, width } = Dimensions.get('window')

class Activity extends Component {
  render() {
    return (
      <ImageBackground source={require('../asset/images/BK1.jpg')} style={{flex: 1,
        resizeMode: "cover",
        justifyContent:'center',}}>
      <View style={styles.greetingText}>
        <Surat />
        <View style={{ position: 'absolute', marginTop: 105, marginLeft: 187 }}>
          <JumlahDomisili />
        </View>
        <View style={{ position: 'absolute', marginTop: 168, marginLeft: 187 }}>
          <JumlahTM />
        </View>
        <View style={{ position: 'absolute', marginTop: 248, marginLeft: 191 }}>
          <JumlahPD />
        </View>
        <View style={{ position: 'absolute', marginTop: 312, marginLeft: 187 }}>
          <JumlahKtp />
        </View>
        <View style={{ position: 'absolute', marginTop: 391, marginLeft: 191 }}>
          <JumlahSkck />
        </View>
        <View style={{ position: 'absolute', marginTop: 471, marginLeft: 191 }}>
          <JumlahNikah />
        </View>
        <View style={{ position: 'absolute', marginTop: 535, marginLeft: 193 }}>
          <Text style={{color:'white',fontWeight:'bold',}}>!</Text>
        </View>
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  greetingText: {
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    top: 30,
    color: '#383838',
    marginBottom:250
  }
})
export default Activity