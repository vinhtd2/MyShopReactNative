
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/components/App';

export default class MyShopPractice extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('MyShopPractice', () => MyShopPractice);
