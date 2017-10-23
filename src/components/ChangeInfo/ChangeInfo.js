import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

import backSpecial from '../../media/appIcon/backs.png';

export default class ChangeInfo extends Component {
  constructor(props) {
    const { name, address, phone } = props.navigation.state.params.user;
    super(props);
    this.state = {
      txtName: name,
      txtAddress: address,
      txtPhone: phone,
    };
  }
  goBackToMain() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  render() {
    const {
      wrapper,
      header,
      headerTitle,
      backIconStyle,
      body,
      signInContainer,
      signInTextStyle,
      textInput
    } = styles;
    const { txtName, txtAddress, txtPhone } = this.state;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <Text style={headerTitle}>User Information</Text>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <TextInput
            style={textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={txtName}
            onChangeText={txtName => this.setState({ ...this.state, txtName })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={txtAddress}
            onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={txtPhone}
            onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
          />
          <TouchableOpacity style={signInContainer}>
            <Text style={signInTextStyle}>CHANGE YOUR INFORMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#FFF' },
  header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
  headerTitle: { fontFamily: 'Avenir', color: '#FFF', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1
  },
  signInTextStyle: {
    color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  signInStyle: {
    flex: 3,
    marginTop: 50
  }
});