import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ImageBackground, Text, View, Vibration, FlatList, Image, Button, TouchableOpacity, Modal } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import flatlistData from '../DataJadwal/index';

class FlatListItem extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <Image
                    source={{ uri: this.props.item.Gotongroyong }}
                    style={{ width: '100%', height: 200, margin: 5, borderRadius: 20, marginVertical: 20, marginTop: 100 }}>
                </Image>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    FlatListItem: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'

    }
});
export default class App extends React.Component {
    /**
     * Log out an example event after zooming
     *
     * @param event
     * @param gestureState
     * @param zoomableViewEventObject
     */
    logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
        console.log('');
        console.log('');
        console.log('-------------');
        console.log('Event: ', event);
        console.log('GestureState: ', gestureState);
        console.log('ZoomableEventObject: ', zoomableViewEventObject);
        console.log('');
        console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
    }

    render() {
        return (
            <ImageBackground source={require('../../../../asset/images/BK1.jpg')} style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: 'center',
            }}>
                <View style={{ flex: 1 }}>
                    <ReactNativeZoomableView
                        maxZoom={1.5}
                        minZoom={0.5}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders={true}
                        onZoomAfter={this.logOutZoomState}
                        style={{
                            padding: 10,
                        }}
                    >
                        {/* <Image style={{ flex: 1, width: null, height: '100%', borderRadius: 10 }}
                        source={require('../../../../asset/images/jadwalmusyawarah.jpg')}
                        resizeMode="contain" /> */}
                        <FlatList
                            data={flatlistData}
                            renderItem={({ item, index }) => {
                                return (
                                    <FlatListItem item={item} index={index}></FlatListItem>
                                );
                            }}
                        >
                        </FlatList>
                    </ReactNativeZoomableView>
                </View>
            </ImageBackground>

        );
    }
}