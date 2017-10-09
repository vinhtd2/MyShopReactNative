import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

import { StackNavigator } from 'react-navigation';

StatusBar.setHidden(true);

const AppStackNavigator = StackNavigator({
  MAIN: { screen: Main },
  CHANGE_INFO: { screen: ChangeInfo },
  AUTHENTICATION: { screen: Authentication },
  ORDER_HISTORY: { screen: OrderHistory }
},{
  headerMode: 'none'
})

export default class App extends Component {
  render() {
    return <AppStackNavigator screenProps="hello"/>
  }
}

