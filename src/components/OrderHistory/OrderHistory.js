import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  goBackToMain() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#2D86FF' }}>
        <Text>OrderHistory Component</Text>
        <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}