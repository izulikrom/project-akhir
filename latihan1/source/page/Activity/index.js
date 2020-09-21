import React, { Component } from 'react'
import { StyleSheet, View,ImageBackground, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Surat from './Routes/Surat';

const { height, width } = Dimensions.get('window')

class Activity extends Component {
  render() {
    return (  
    <ImageBackground source={require('../../asset/images/BK1.jpg')} style={{
      flex: 1,
      resizeMode: "cover",
      justifyContent: 'center',
  }}>
          <View style={styles.greetingText}>
          <Surat/>
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
    alignItems:'center',
    marginBottom:100
  }
})
export default Activity