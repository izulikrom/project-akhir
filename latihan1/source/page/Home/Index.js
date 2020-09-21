import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import KasComponent from './Infaq/kasComponents';
import Ovo from './Infaq/Ovo';
import Gopay from './Infaq/Gopay';
import FiturDesa from '../../component/FiturDesa';
import BeritaItem from './Berita/BeritaSub';

const { height, width } = Dimensions.get('window')

class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('../../asset/images/BK1.jpg')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
      }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
          <Image style={styles.imageBanner} source={require('../../asset/images/awan.jpg')} />

          <Text style={styles.greetingText}>Aplikasi DesakU</Text>
          <View style={styles.danaDesa}>
            <View style={styles.textKas}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#383838' }}>Infaq Masjid Nurul Hilmi</Text>
            </View>
            <View style={styles.garisKas}></View>
            <View style={styles.infaq}>
              <KasComponent />
              <Ovo />
              <Gopay />
            </View>
          </View>
          <View>
            <FiturDesa />
          </View>
          <View style={styles.garisDana}></View>
          <BeritaItem />
        </ScrollView> 
        </ImageBackground> 
    )
  }
}
const styles = StyleSheet.create({
  imageBanner: {
    height: 140, width: width,
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 17,
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838'
  },
  danaDesa: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10
  },
  textKas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10
  },
  garisKas: {
    height: .8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },
  garisDana: {
    width: width,
    height: 15,
    backgroundColor: '#ededed',
    marginVertical: 15
  },
  infaq: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default Home