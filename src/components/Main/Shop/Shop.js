import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import global from '../../../components/global';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedTab: 'home',
      type: [],
      topProducts: [],
      cartArray: []
    };
    global.addProductToCart = this.addProductToCart.bind(this)
  }
  addProductToCart(product) {
    this.setState({ cartArray: this.state.cartArray.concat(product) })
  }
  componentDidMount() {
    fetch('http://192.168.1.56/api/')
      .then(res => res.json())
      .then(resJSON => {
          const {type, product} = resJSON;
          this.setState({type, topProducts: product});
        }

      );
  }
  openMenu() {
    const { open } = this.props;
    open();
  }
  render() {
    const { iconStyle } = styles;
    const { type, selectedTab, topProducts, cartArray } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'home'}
            title="Home"
            onPress={() => this.setState({selectedTab: 'home'})}
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B098', fontFamily: 'Avenir' }}
          >
            <Home type={type} topProducts={topProducts} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'cart'}
            title="Cart"
            onPress={() => this.setState({selectedTab: 'cart'})}
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
            badgeText={cartArray.length}
            selectedTitleStyle={{ color: '#34B098', fontFamily: 'Avenir' }}
          >
            <Cart cartArray={cartArray} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'search'}
            title="Search"
            onPress={() => this.setState({ selectedTab: 'search' })}
            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B098', fontFamily: 'Avenir' }}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'contact'}
            title="Contact"
            onPress={() => this.setState({ selectedTab: 'contact' })}
            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B098', fontFamily: 'Avenirg' }}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20, height: 20
  }
});

export default Shop;