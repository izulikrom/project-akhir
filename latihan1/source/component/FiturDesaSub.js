import React from 'react'
import { Image, Text, View, StyleSheet,TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    imageFiturUtama: {
        height: 55,
        width: 55,
        marginTop: 30
    },
    textFiturDesa: {
        textAlign: 'center',
        marginTop:4
    }
})
// const FiturDesaSub = (props) => {

//     return (
//             <View style={{width:'25%',alignItems:'center'}}>
//                 <Image style={styles.imageFiturUtama} source={props.Image} />
//                 <Text style={styles.textFiturDesa}>{props.title}</Text>
//             </View>
//     )
// }

class FiturDesaSub extends React.Component{
render(){
    return (
            <TouchableOpacity onPress={this.props.onPress} style={{width:'25%',alignItems:'center'}}>
                <Image style={styles.imageFiturUtama} source={this.props.Image} />
                <Text style={styles.textFiturDesa}>{this.props.title}</Text>
            </TouchableOpacity>
    )
}
}

export default FiturDesaSub