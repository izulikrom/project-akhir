import React, { Component } from 'react'
import { KeyboardAvoidingView, Picker, StyleSheet, View, Image, StatusBar, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableHighlight, ImagePickerIOS } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import Loading from 'react-native-whc-loading';
//upload gambar
import Images from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formDataSaran: {
				nm_depan: '',
				nm_belakang: '',
				username: '',
				password: '',
			}
		}
	}
	//======Open Gallery========================================//
	render() {
		const { nm_depan, nm_belakang, username, password } = this.state.formDataSaran;
		return (
			<ScrollView backgroundColor='#F5F5DC'>
				<KeyboardAvoidingView style={styles.container} enabled>
					<View style={styles.row}>
						<TextInput
							placeholder='Nama Depan'
							style={styles.txtInput}
							onChangeText={nm_depan =>
								this.setState(prevState => ({
									formDataSaran: {
										...prevState.formDataSaran,
										nm_depan
									}
								}))
							}
							value={nm_depan}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
					<View style={styles.row}>
						<TextInput
							placeholder='Nama Belakang'
							style={styles.txtInput}
							onChangeText={nm_belakang =>
								this.setState(prevState => ({
									formDataSaran: {
										...prevState.formDataSaran,
										nm_belakang
									}
								}))
							}
							value={nm_belakang}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
					<View style={styles.row}>
						<TextInput
							placeholder='Username'
							style={styles.txtInput}
							onChangeText={username =>
								this.setState(prevState => ({
									formDataSaran: {
										...prevState.formDataSaran,
										username
									}
								}))
							}
							value={username}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
					<View style={styles.row}>
						<TextInput
						secureTextEntry={true}
							placeholder='Password'
							style={styles.txtInput}
							onChangeText={password =>
								this.setState(prevState => ({
									formDataSaran: {
										...prevState.formDataSaran,
										password
									}
								}))
							}
							value={password}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
					{/*BUTTON */}
					<Text style={styles.label} >
						{/* {JSON.stringify(this.state.formDataSaran)} */}
					</Text>
					<View style={styles.row}>
						<TouchableHighlight
							onPress={this._saveData}
							style={styles.btnContainer}>
							<Text style={styles.txtBtn}>Daftar</Text>
						</TouchableHighlight>
					</View>
				</KeyboardAvoidingView>
				{/*================================================= Loading//          */}
				<Loading ref="loading" />
			</ScrollView>
		);
	}
	_saveData = async () => {
		this.refs.loading.show();
		try {
			await fetch('http://10.0.7.69/TugasAkhir/tambah_users.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.formDataSaran),
			})
				.then((response) => response.text())
				.then((json) => {
					//return json.movies;
					setTimeout(() => {
						this.refs.loading.close();
						alert("Akun Anda Telah Terdaftar");
						this.props.navigation.navigate("Login");
					}, 2000);
				})
				.catch((error) => {
					this.refs.loading.close();
					console.error(error);
				});
		} catch (error) {
			this.refs.loading.close();
			alert(error)
		}


	};
}
export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		marginTop: 30,
		alignItems:'center'

	},
	row: {
		marginBottom: 20
	},
	label: {
		fontSize: 20,
		color: 'grey',
	},
	btnContainer: {
		backgroundColor: 'skyblue',
		padding: 10,
		alignItems: 'center',
		width: 200,
		borderRadius: 5,
		alignContent: 'center',
	},
	txtBtn: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	},
	txtInput: {
		height: 40,
		borderWidth: 1,
		width:250,
		alignContent:'center',
		borderRadius: 10,
		borderColor: 'orange',
		backgroundColor: 'white'
	},
});