import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ListView
} from 'react-native';

import { localhost } from '../../../global'
const url = `${localhost}api/images/product/`;

export default class TopProduct extends Component {
  goToDetail = (product) => {
    const { navigate } = this.props.navigation;
    navigate('PRODUCT_DETAIL', { product: product } );
  }
  render() {
    const {
      container,
      titleContainer,
      title,
      body,
      productContainer,
      productImage,
      productName, productPrice
    } = styles;
    const { topProducts } = this.props;
    return (
      <View style={ container }>
        <View style={ titleContainer }>
          <Text style={title}>Top Product</Text>
        </View>
        <ListView
          contentContainerStyle={body}
          enableEmptySections
          dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }).cloneWithRows(topProducts)}
          renderRow={(product) => (
            <TouchableOpacity style={productContainer} onPress={() => this.goToDetail(product)} key={product.id}>
              <Image source={{uri: `${url}${product.images[0]}`}} style={productImage} />
              <Text style={productName}>{product.name.toUpperCase()}</Text>
              <Text style={productPrice}>{product.price}</Text>
            </TouchableOpacity>
          )}
          renderSeparator={(sectionId, rowId) => {
            if(rowId % 2 === 1) return <View style={{ width, height: 10 }} />
            return null;
          }}
        />
      </View>
    )
  }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10
  },
  title: {
    color: '#D3D3CF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  productContainer: {
    width: productWidth,
    shadowColor: '#2E272B',
    paddingBottom: 20,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight
  },
  productName: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#D3D3CF',
    fontWeight: '500',
    marginVertical: 5,
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90',
    marginBottom: 5
  }
})