import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet,
  TextInput
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
    }
  }

  goToSignIn = () => {
    this.setState({ isSignIn: true })
  }
  signIn() {
    this.setState({ isSignIn: true })
  }
  signUp() {
    this.setState({ isSignIn: false })
  }
  goBackToMain() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  render() {
    const {
      row1, iconStyle, titleStyle, container, controlStyle, signInStyle, signUpStyle,
      activeStyle,
      inactiveStyle,
      inputStyle,
      bigButton,
      buttonText
    } = styles;

    const { isSignIn } = this.state;

    const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp goToSignIn={this.goToSignIn} />;
    return (
      <View style={container}>
        <View style={ row1 }>
          <TouchableOpacity onPress={ this.goBackToMain.bind(this) }>
            <Image source={ icBack } style={ iconStyle }/>
          </TouchableOpacity>
          <Text style={ titleStyle }>Wearing a Dress</Text>
          <Image source={ icLogo } style={ iconStyle } />
        </View>
        {mainJSX}
        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
            <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    padding: 20,
    justifyContent: 'space-between'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
  iconStyle: { width: 30, height: 30 },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#3EBA77'
  },
  signInStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1
  },
})