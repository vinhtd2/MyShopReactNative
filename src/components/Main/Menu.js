import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends Component {
  goToAuthentication() {
    const { navigate } = this.props;
    navigate('AUTHENTICATION');
  }
  goToChangeInfo() {
    const { navigate } = this.props;
    navigate('CHANGE_INFO');
  }
  goToOrderHistory() {
    const { navigate } = this.props;
    navigate('ORDER_HISTORY');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#A5A5AF' }}>
        <Text>Component Menu</Text>
        <TouchableOpacity onPress={ this.goToAuthentication.bind(this) }>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.goToChangeInfo.bind(this) }>
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.goToOrderHistory.bind(this) }>
          <Text>Go to OrderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Menu;