import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapperPay: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    payImage: {
        height: 45,
        width: 45,
        marginTop: 17,
        marginHorizontal: 40
    }
})
const kasComponent = () => {
    return (
        <View style={styles.wrapperPay}>
            <View>
                <Image style={styles.payImage} source={require('../asset/icon/dana1.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5,fontWeight:'bold' }}>Dana</Text>
            </View>
            <View>
                <Image style={styles.payImage} source={require('../asset/icon/ovo1.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5,fontWeight:'bold' }}>Ovo</Text>
            </View>
            <View>
                <Image style={styles.payImage} source={require('../asset/icon/gopay1.jpg')} />
                <Text style={{ alignSelf: 'center', marginTop: 5,fontWeight:'bold' }}>Gopay</Text>
            </View>
        </View>
    )
}

export default kasComponent
// import React, { Component } from 'react';
// import { StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';

// import { NavigationContainer1 } from '@react-navigation/native'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack'

// import { Home, Activity, Bumdes, Saran, Musyawara, Gotongroyong, Posyandu, PosRonda } from '../page'
// const Stack1 = createStackNavigator();

// const HomeStack1 = () => {
//     return (
//         <Stack1.Navigator
//         //headerMode="none"
//         >
//             <Stack1.Screen name='Beranda' component={BottomTabs}
//                 options={
//                     {
//                         title: "Beranda",
//                         headerShown: false
//                     }
//                 } />
//             <Stack1.Screen name='Musyawara' component={Musyawara}
//                 options={{ title: "Musyawarah Desa", headerShown: true }}
//             />
//             <Stack1.Screen name='Gotongroyong' component={Gotongroyong}
//                 options={{ title: "Gotongroyong Bersama", headerShown: true }}
//             />
//             <Stack1.Screen name='Posyandu' component={Posyandu}
//                 options={{ title: "Posyandu Lansia & Balita", headerShown: true }}
//             />
//             <Stack1.Screen name='PosRonda' component={PosRonda}
//                 options={{ title: "Pos Ronda Malam Hari", headerShown: true }}
//             />
//         </Stack1.Navigator>
//     )
// }


// class index1 extends Component {
//     render() {
//         return (
//             <NavigationContainer1>
//                 <HomeStack1 />
//             </NavigationContainer1>
//         )
//     }
// }
// export default index1