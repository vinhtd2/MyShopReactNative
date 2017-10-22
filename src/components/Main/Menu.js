import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import global from '../global';

import profileIcon from '../../media/temp/profile.png';
import saveToken from '../../api/saveToken';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    global.onSignIn = this.onSignIn.bind(this);
  }
  onSignIn(user) {
    this.setState({ user });
  }
  onSignOut() {
    this.setState({ user: null });
    saveToken('');
  }
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
    const {
      container, profile, btnStyle, btnText, btnSignInStyle,
      btnTextSignIn,
      loginContainer,
      username
    } = styles;
    const { user } = this.state;
    const logoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={btnStyle} onPress={this.goToAuthentication.bind(this)}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );

    const loginJSX = (
      <View style={loginContainer}>
        <Text style={username}>{user ? user.name : ''}</Text>
        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={this.goToOrderHistory.bind(this)}>
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.goToChangeInfo.bind(this)}>
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
            <Text style={btnTextSignIn}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const mainJSX = this.state.user ? loginJSX : logoutJSX;

    return (
      <View style={ container }>
        <Image source={profileIcon} style={profile} />
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B098',
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems: 'center'
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 30
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal:50
  },
  btnText: {
    color: '#34B098',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200
  },
  btnTextSignIn: {
    color: '#34B098',
    fontSize: 15
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 20
  }


})

export default Menu;