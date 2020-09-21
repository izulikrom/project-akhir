import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Button, Keyboard, Modal,
	TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lupa from './lupa';
import Register from './registerLink';

export default class login extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Login',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});
	constructor(props) {
		super(props)
		this.state = {
			userEmail: '',
			userPassword: ''
		}
	}

	login = () => {
		const { userEmail, userPassword } = this.state;
		// let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (userEmail == "") {
			//alert("Please enter Email address");
			this.setState({ email: 'Masukkan No KK' })

		}

		// else if (reg.test(userEmail) === false) {
		// 	//alert("Email is Not Correct");
		// 	this.setState({ email: 'Email is Not Correct' })
		// 	return false;
		// }

		else if (userPassword == "") {
			this.setState({ email: 'Masukkan NIK' })
		}
		else {

			fetch('http://10.0.7.69/TugasAkhir/register.php',
				{
					method: 'post',
					header: {
						'Accept': 'application/json',
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						// we will pass our input data to server
						email: userEmail,
						password: userPassword
					})

				})
				.then((response) => response.text())
				.then((responseJson) => {
					if (responseJson == "ok") {
						// redirect to profile page
						alert("Berhasil Verifikasi");
						this.props.navigation.navigate("Register");
					} else {
						alert("Data anda benar !");
						this.props.navigation.navigate("Register");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}


		Keyboard.dismiss();
	}


	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={{ fontWeight: 'bold' }}>Peringatan!</Text>
					<Text style={{ color: 'grey', marginBottom: 20 ,marginRight:50}}>Setiap satu NIK hanya bisa digunakan satu kali</Text>
				</View>
				<TextInput
					placeholder="No KK"
					keyboardType='number-pad'
					style={styles.txtInput}
					onChangeText={userEmail => this.setState({ userEmail })}
				/>

				<TextInput
					placeholder="NIK"
					keyboardType='number-pad'
					style={styles.txtInput}
					onChangeText={userPassword => this.setState({ userPassword })}

				/>
				<Text style={{ color: 'red', marginRight: 220 }}>{this.state.email}</Text>
				<TouchableOpacity
					onPress={this.login}
					style={styles.btn}>
					<Text style={{ color: 'white', fontWeight: 'bold' }}>Lanjutkan</Text>
				</TouchableOpacity>
			</View>

		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	txtLupa: {
		marginLeft: 250,
		marginTop: 10,
		color: 'orange',
		fontWeight: 'bold'
	},
	txtInput: {
		height: 50,
		width: 350,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'orange',
		backgroundColor: 'white',
		marginBottom: 20,
		alignContent: 'center'
	},
	btn: {
		width: 350,
		padding: 10, backgroundColor: 'orange',
		alignItems: 'center',
		alignContent: 'center'
	},
	TextData: {
		flex: 1,
		flexDirection: 'row-reverse',
		position: 'absolute',
		marginRight: 150
	}
});

AppRegistry.registerComponent('login', () => login);
