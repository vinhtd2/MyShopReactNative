import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

import checkLogin from '../../api/checkLogin';

import getToken from '../../api/getToken';
import refreshToken from '../../api/refreshToken'
import global from '../global';

export default class Main extends Component {
  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      .then(res => global.onSignIn(res.user))
      .catch(err => console.log('ERROR CHECK LOGIN', err));

  //   setInterval(() => {
  //     getToken()
  //       .then(token => refreshToken(token))
  //   }, 60 * 1000);
  }

  goToAuthentication() {
    const { navigate } = this.props.navigation;
    navigate('AUTHENTICATION');
  }

  goToChangeInfo() {
    const { navigate } = this.props.navigation;
    navigate('CHANGE_INFO');
  }

  goToOrderHistory() {
    const { navigate } = this.props.navigation;
    navigate('ORDER_HISTORY');
  }

  closeControlPanel = () => {
    this.drawer.close()
  }
  openControlPanel = () => {
    this.drawer.open()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu navigate={ navigate } />}
        openDrawerOffset={0.4}
        tapToClose
      >
        <Shop open={ this.openControlPanel.bind(this) } />
      </Drawer>
    );
  }
}