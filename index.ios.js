import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

export default class MyShopReactNative extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('MyShopPractice', () => MyShopReactNative);