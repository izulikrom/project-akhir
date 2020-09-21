import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Surat from './Routes/Surat';

const { height, width } = Dimensions.get('window')

class Activity extends Component {
  render() {
    return (
          <View style={styles.greetingText}>
          <Surat/>
          </View>
    )
  }
}
const styles = StyleSheet.create({
  greetingText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default Activity