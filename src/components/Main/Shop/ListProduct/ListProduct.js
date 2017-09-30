import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ListProduct extends Component {
  goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  goToDetail() {
    const { navigate } = this.props.navigation;
    navigate('PRODUCT_DETAIL');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#80A4D4' }}>
        <TouchableOpacity onPress={this.goBack.bind(this)}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToDetail.bind(this)}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}