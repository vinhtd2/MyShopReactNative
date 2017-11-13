import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet, ListView,
  Image
} from 'react-native';

import getListProduct from '../../../../api/getListProduct';

import backList from '../../../../media/appIcon/backList.png';

import sp1 from '../../../../media/temp/sp1.jpeg';

const url = 'http://192.168.1.56/api/images/product/';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      listProducts: ds.cloneWithRows([1])
    };
  }
  componentDidMount() {
    getListProduct(4, 1)
      .then(arrProduct => {
        this.setState({ listProducts: this.state.listProducts.cloneWithRows(arrProduct) })
      })
      .catch(err => console.log(err));
  }
  goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  goToDetail() {
    const { navigate } = this.props.navigation;
    navigate('PRODUCT_DETAIL');
  }
  render() {
    console.log('------------------------------------');
    console.log(this.state.listProducts);
    console.log('------------------------------------');
    const { container, header, wrapper, backStyle, titleStyle,
      productContainer,
      productImage,
      productInfo,
      lastRowInfo,
      txtName,
      txtPrice,
      txtMaterial,
      txtColor,
      txtShowDetail
    } = styles;

    const { category } = this.props.navigation.state.params;
    return (
      <View style={container}>
        <View style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={this.goBack.bind(this)}>
              <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{category.name}</Text>
            <View style={{ width: 30 }} />
          </View>
          <ListView
            dataSource={this.state.listProducts}
            renderRow={product => (
              <View style={productContainer}>
                <TouchableOpacity>
                  <Image style={productImage}  source={{ uri: `${url}58.jpeg` }}/>
                </TouchableOpacity>
                <View style={productInfo}>
                  <Text style={txtName}>{product.name}</Text>
                  <Text style={txtPrice}>{product.price}$</Text>
                  <Text style={txtMaterial}>{product.material}</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>{product.color}</Text>
                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                    <TouchableOpacity>
                      <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}

/*
 <ScrollView style={wrapper}>


 </ScrollView>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#DBDBD8',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 10,
    paddingHorizontal: 10
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    fontFamily:'Avenir',
    color: '#B10D65',
    fontSize: 20
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productContainer: {
    flexDirection: 'row',
    borderTopColor: '#F0F0F0',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#BCBCBC',
    fontSize: 20,
    fontWeight: '400'
  },
  txtPrice: {
    fontFamily: 'Avenir',
    color: '#B10D65',
  },
  txtMaterial: {
    fontFamily: 'Avenir',
  },
  txtColor: {
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 11
  }

})