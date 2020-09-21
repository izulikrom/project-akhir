import React, { Component } from 'react'
import { StyleSheet, View,ImageBackground, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Admin from './Router/Admin';

const { height, width } = Dimensions.get('window')

class Activity extends Component {
  render() {
    return (
      <ImageBackground source={require('../asset/images/BK1.jpg')} style={{flex: 1,
        resizeMode: "cover",
        justifyContent:'center',}}>
          <View style={styles.greetingText}>
          <Admin/>
          </View>
          </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  greetingText: {
    fontWeight: 'bold',
    fontSize: 17,
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838',
    alignItems:'center'
  }
})
export default Activity