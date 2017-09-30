import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
  goToDetail() {
    const { navigate } = this.props.navigation;
    navigate('PRODUCT_DETAIL');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#D6D6D6' }}>
        <Text>Cart Component</Text>
        <TouchableOpacity onPress={this.goToDetail.bind(this)}>
          <Text>Go to PRODUCT_DETAIl</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CartView;