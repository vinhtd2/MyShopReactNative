import React, { Component } from 'react';
import { ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct.js';

class Home extends Component {
  render() {
    const types = this.props.screenProps.type;
    const topProducts = this.props.screenProps.topProducts;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
        <Collection />
        <Category navigation={this.props.navigation} types={types} />
        <TopProduct navigation={this.props.navigation} topProducts={topProducts} />
      </ScrollView>
    );
  }
}

export default Home;