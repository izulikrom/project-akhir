import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, StatusBar, Button, Keyboard, Modal, ImageBackground,
	TouchableHighlight
} from 'react-native';
import Surat from '../source/Lainnya/Activity/Routes/Surat';
import { StackNavigator } from 'react-navigation';
import Loading from 'react-native-whc-loading';
import Lupa from './lupa';
import Register from './registerLink';

const image = { uri: "https://www.shining-envision.com/sf/7WarungGarasiIbuRycka-48.jpg" };

export default class login extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Login',
	});
	constructor(props) {
		super(props)
		this.state = {
			userEmail: '',
			userPassword: ''
		}
	}

	login = () => {
		this.refs.loading.show();
		const { userEmail, userPassword } = this.state;
		// let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (userEmail == "") {
			//alert("Please enter Email address");
			this.setState({ email: 'Masukkan Username' })
			this.refs.loading.close();
		}

		// else if (reg.test(userEmail) === false) {
		// 	//alert("Email is Not Correct");
		// 	this.setState({ email: 'Email is Not Correct' })
		// 	return false;
		// }

		else if (userPassword == "") {
			this.setState({ email: 'Please enter password' })
			this.refs.loading.close();
		}
		else {

			fetch('http://10.0.7.69/TugasAkhir/login.php',
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
						this.refs.loading.close();
						alert("Successfully Login");
						this.props.navigation.navigate("Beranda");
					} else {
						this.refs.loading.close();
						// alert(
						// 	// 'PERHATIAN',    
						// 	"Successfully Login Anjay");
						// alert("Username atau password salah!");
						this.props.navigation.navigate("Beranda");
					}
				})
				.catch((error) => {
					this.refs.loading.close();
					// console.error(error);
					alert("Sambungkan ke internet");
				});
		}
		Keyboard.dismiss();
	}

	render() {
		return (
				<ImageBackground source={require('../source/asset/images/BK1.jpg')} style={styles.image}>
				<View style={styles.container}>
				<StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)" />
					<View>
						<Text style={{ fontWeight: 'bold' }}>Selamat Datang !</Text>
						<Text style={{ color: 'grey', marginBottom: 20 }}>Untuk masuk pastikan anda sudah terdaftar di Aplikasi.</Text>
					</View>
					<TextInput
						placeholder="Username"
						style={styles.txtInput}
						onChangeText={userEmail => this.setState({ userEmail })}
					/>

					<TextInput
						placeholder="Password"
						secureTextEntry={true}
						style={styles.txtInput}
						onChangeText={userPassword => this.setState({ userPassword })}

					/>
					<Text style={{ color: 'red', marginRight: 220 }}>{this.state.email}</Text>
					<TouchableOpacity
						onPress={this.login}
						style={styles.btn}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>Masuk</Text>
					</TouchableOpacity>
					<View >
						<View>
							< Lupa />
							<Text style={{ marginLeft: 160, color: 'grey', marginTop: 10, fontWeight: 'bold' }}>Atau</Text>
							<Register />
						</View>
					</View>
					<Loading ref="loading" />
				</View><Surat/>
			</ImageBackground>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:50
	},
	txtLupa: {
		marginLeft: 250,
		marginTop: 10,
		color: 'orange',
		fontWeight: 'bold'
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent:'center',

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
		padding: 10,
		backgroundColor: 'orange',
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
