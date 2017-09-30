import React, { Component } from 'react';
import { ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const HomeStackNavigator = StackNavigator({
  HOME_VIEW: { screen: HomeView },
  LIST_PRODUCT: { screen: ListProduct },
  PRODUCT_DETAIL: { screen: ProductDetail }
}, {
  headerMode: 'none'
})

class Home extends Component {
  render() {
    return <HomeStackNavigator />;
  }
}

export default Home;