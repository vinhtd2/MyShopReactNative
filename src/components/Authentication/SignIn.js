import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import signIn from '../../api/signIn';

import global from '../global';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSignIn = () => {
    const { email, password } = this.state;
    const { goBackToMain } = this.props;
    signIn(email, password)
      .then(res => {
        global.onSignIn(res.user);
        goBackToMain();
      })
      .catch(error => console.log(error));
  }
  render() {
    const {
      inputStyle,
      bigButton,
      buttonText,
    } = styles;
    const { email, password } = this.state;
    return (
      <View>
        <TextInput
          style={inputStyle}
          placeholder="Enter your name"
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={inputStyle}
          placeholder="Enter your email"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity style={bigButton} onPress={this.onSignIn}>
          <Text style={buttonText}>SIGN IN NOW</Text>
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