import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

import { StackNavigator } from 'react-navigation';

const CartStackNavigator = StackNavigator({
  CART_VIEW: { screen: CartView },
  PRODUCT_DETAIL: { screen: ProductDetail }
}, {
  headerMode: 'none'
})

class Cart extends Component {
  render() {
    const { cartArray } = this.props;
    console.log(cartArray);
    console.log('11111111111111')
    return <CartStackNavigator screenProps={ cartArray } />
  }
}

export default Cart;