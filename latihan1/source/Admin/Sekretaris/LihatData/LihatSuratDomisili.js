// import React, { Component } from 'react'
// import {
//     StyleSheet, View,
//     Alert,
//     TextInput,
//     Button,
//     Text,
//     Platform,
//     TouchableOpacity,
//     ListView, FlatList,
//     ActivityIndicator
// } from "react-native";

// export default class Example extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dataSource: [],
//             isLoading: true,
//             id:'',
//             TextInput_Student_ID: '',
//         }

//     }

//     componentDidMount(){
 
//         // Received Student Details Sent From Previous Activity and Set Into State.
//         this.setState({ 
//           dataSource : this.props.navigation.state.params.id,
//         })
//        }

//     DeleteStudentRecord = () => {
//         fetch('http://10.0.7.69/TugasAkhir/Delete.php', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
        
//                 id : this.state.TextInput_Student_ID
            
//               })

//         }).then((response) => response.text())
//             .then((responseJson) => {

//                 // Showing response message coming from server after inserting records.
//                 Alert.alert(responseJson);

//             }).catch((error) => {
//                 console.error(error);
//             });

//         // this.props.navigation.navigate('Sekretaris');

//     }

//     renderItem = ({ item }) => {
//         return (
            // <View style={{ flex: 1, flexDirection: 'column' }}>
            //     <Text style={styles.Textnama}>{item.nama}</Text>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Nama Lengkap
            //         </Text>
            //         <Text style={styles.TextData}>: {item.nama} </Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Jenis Kelamin
            //         </Text>
            //         <Text style={styles.TextData}>: {item.jk}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Tempat, Tanggal lahir
            //         </Text>
            //         <Text style={styles.TextData}>: {item.Tempat_Lhr}, {item.tgl_lahir}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             No. KK
            //         </Text>
            //         <Text style={styles.TextData}>: {item.NoKk}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Pekerjaan
            //         </Text>
            //         <Text style={styles.TextData}>: {item.pekerjaan}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Agama
            //         </Text>
            //         <Text style={styles.TextData}>: {item.Agama}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Kewarganegaraan
            //         </Text>
            //         <Text style={styles.TextData}>: {item.Kewarganegaraan}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Alamat Lengkap
            //         </Text>
            //         <Text style={styles.TextData}>: {item.Alamat}</Text>
            //     </View>
            //     <View style={{ flex: 1, flexDirection: 'row' }}>
            //         <Text>
            //             Waktu
            //         </Text>
            //         <Text style={styles.TextData}>: {item.date_create}</Text>
            //     </View>
            //     <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
            //         <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
            //     </TouchableOpacity>
            // </View>
//         )
//     }
    // renderSeparator = () => {
    //     return (
    //         //Buat Garis======================================================
    //         <View
    //             style={{ height: 1, width: '100%', backgroundColor: 'skyblue' }}>

    //         </View>
    //     )
    // }

//     componentDidMount() {
//         const url = 'http://10.0.7.69/TugasAkhir/LihatDomisili.php'
//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     dataSource: responseJson,
//                     isLoading: false
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     render() {
//         return (
//             this.state.isLoading
//                 ?
//                 <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                     <ActivityIndicator size="large" color="red" animating />
//                 </View>
//                 :
//                 <View style={styles.Container}>
//                     <FlatList
//                         data={this.state.dataSource}
//                         renderItem={this.renderItem}
//                         keyExtractor={(item, index) => index}
//                         ItemSeparatorComponent={this.renderSeparator}

//                     />
//                 </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     Container: {
//         flex: 1,
//         paddingTop: 30,
//         backgroundColor: "#fff"
//     },
//     Textnama: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         fontSize: 20

//     },
//     TextData: {
//         flex: 1, flexDirection: 'row-reverse', position: 'absolute', marginRight: 150
//     }
// });


import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default class App extends React.Component {
  state = {
    items: [],
    isLoading: false
  }

  renderRow = ({ item }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={styles.Textnama}>{item.nama}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Nama Lengkap
            </Text>
            <Text style={styles.TextData}>: {item.nama} </Text>
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
                No. KK
            </Text>
            <Text style={styles.TextData}>: {item.NoKk}</Text>
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
                Alamat Lengkap
            </Text>
            <Text style={styles.TextData}>: {item.Alamat}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>
                Waktu
            </Text>
            <Text style={styles.TextData}>: {item.date_create}</Text>
        </View>
        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
            <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
        </TouchableOpacity>
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
    let API_URL = 'http://10.0.7.69/TugasAkhir/LihatDomisili.php';
    this.setState({isLoading:true})
    fetch(API_URL).then(res => res.json()).then(res => {
      this.setState({ items: res })
    }).finally(()=> this.setState({isLoading:false}))
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
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
