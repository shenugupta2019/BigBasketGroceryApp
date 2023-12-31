import React, { useState,useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StyleSheet,TextInput } from 'react-native';
const { width } = Dimensions.get('window');
import CardView from './CardView';


const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        </View>
    );

}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
       // backgroundColor: 'red',
        // width: 400,
        // height: 300,
    },
   
});