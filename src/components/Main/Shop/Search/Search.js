import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView';

import { StackNavigator } from 'react-navigation';

const SearchStackNavigator = StackNavigator({
  SEARCH_VIEW: { screen: SearchView },
  PRODUCT_DETAIL: { screen: ProductDetail }
}, {
  headerMode: 'none'
});

class Search extends Component {
  render() {
    return <SearchStackNavigator />;
  }
}

export default Search;