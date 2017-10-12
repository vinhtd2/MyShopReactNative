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

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const url = 'http://192.168.1.56/api/images/product/';

export default class TopProduct extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    const { topProducts } = this.props;
    this.state = {
      dataSource: ds.cloneWithRows(topProducts)
    }

  }
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
    return (
      <View style={ container }>
        <View style={ titleContainer }>
          <Text style={title}>Top Product</Text>
        </View>
        <View style={body}>
          {this.props.topProducts.map(e => (
            <TouchableOpacity style={productContainer} onPress={() => this.goToDetail(e)} key={e.id}>
              <Image source={{uri: `${url}${e.images[0]}`}} style={productImage} />
              <Text style={productName}>{e.name.toUpperCase()}</Text>
              <Text style={productPrice}>{e.price}</Text>
            </TouchableOpacity>
            ))}
        </View>
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