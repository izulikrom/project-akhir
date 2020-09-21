import React, { Component } from 'react'
import { StyleSheet,ImageBackground, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const image = { uri: "https://i.pinimg.com/474x/04/27/5f/04275fe3dcc15b2c7dbbd01853efbc88.jpg" };
const image1 = { uri: "https://scontent.fcgk22-1.fna.fbcdn.net/v/t1.0-9/118698601_107935281048861_2006184460025609274_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeH3aM9ZQ73ohSs8AOz6IPaTn12TawDSWyGfXZNrANJbIWZjR6gf09KcKqDHynF5Ol36jiohlL14sI2vBfovITnc&_nc_ohc=TN-NyS_5ZQ0AX-gIMeH&_nc_ht=scontent.fcgk22-1.fna&oh=d31740fccf5727ee3c8b8038e8b2fc35&oe=5F7729AF"};

const { height, width } = Dimensions.get('window')

class Home extends Component {
  render() {
    return (
      <Image source={image1} style={styles.image}/>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    justifyContent: "center"
  },
})
export default Home