import React, { Component } from 'react'
import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

import Routes from './config/router/index'

const { height, width } = Dimensions.get('window')

class Home extends Component {
  render() {
    return (
      <Routes/>
    )
  }
}
export default Home
