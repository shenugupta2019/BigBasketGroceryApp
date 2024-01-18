import React, {useState, useEffect,useCallback, Suspense,lazy} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
const {width} = Dimensions.get('window');
import ProductCell from './ProductCell';
const SignUpForm = lazy(() => import ("./SignUpForm"));
import ProductDataScreen from './ProductDataScreen';
import productsJsonData from './products.json';
import {ProductList} from './ProductDetails';
import itemsJSONData from './items.json';

const ProductsDataScreen = () => {
  var itemData  :[Row] = [];
  itemData = itemsJSONData.rows;

  console.log('json data rows', itemData);
  
  
  const renderBrands = (item) => {
    console.log('data load', item);
    return (
      <View style={styles.container}>
        <ProductCell productsData={item} handler={addChildData} />
      </View>
    );
  };
  const addChildData = useCallback(() => {
    console.log('shenu flat list item pressed');
  }, []);


  return (
    <View style={styles.container}>

      <FlatList
        showsVerticalScrollIndicator={true}
        data={itemData}
        renderItem={renderBrands}
        scrollEnabled={true}
        // onTouchStart={onBackgroundPressed}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    // backgroundColor: 'red',
    // width: 400,
    // height: 300,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 2,
    width: 80,
    height: 40,
  },

  leftView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 2,
    width: 80,
    height: 40,
  },
  rightView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginLeft: 10,
  },

  cardView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
    flexDirection: 'row',
  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default ProductsDataScreen;