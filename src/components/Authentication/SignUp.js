import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import register from '../../api/register';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    }
  }

  registerUser = () => {
    const { name, email, password } = this.state;
    register(email, name, password)
      .then(res => {
        if(res === 'THANH_CONG') return this.onSuccess();
        this.onFail();
      });
  }

  removeEmail = () => {
    this.setState({ email: '' });
  }

  onSuccess = () => {
    Alert.alert(
      'Notice',
      'Sign up successfully',
      [
        {text: 'OK', onPress: () => this.removeEmail},
      ],
      { cancelable: false }
    )
  }

  onFail = () => {
    Alert.alert(
      'Notice',
      'Email has been used by other',
      [
        {text: 'OK', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    const {
      inputStyle,
      bigButton,
      buttonText,
    } = styles;
    const {
      name,
      email,
      password,
      rePassword,
    } = this.state;
    return (
      <View>
        <TextInput
          style={inputStyle}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => this.setState({ name: text})}
        />
        <TextInput
          style={inputStyle}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={inputStyle}
          placeholder="Enter your password"
          value={password}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={inputStyle}
          placeholder="Re-enter your password"
          value={rePassword}
          secureTextEntry
          onChangeText={text => this.setState({ rePassword: text })}
        />
        <TouchableOpacity style={bigButton} onPress={this.registerUser}>
          <Text style={buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '400'
  }
})