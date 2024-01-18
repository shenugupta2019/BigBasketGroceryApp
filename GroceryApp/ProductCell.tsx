
import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StyleSheet,Image,Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
const { width } = Dimensions.get('window');


const ProductCell = ({productsData,
    handler,
}) => {
    console.log('shenu data fast image', productsData.item);
    return (
        <Pressable
        onPress= {handler}> 
        <View style={styles.cardView}>
            <View style={styles.leftView}>
            <Text style={styles.textView}>{productsData.item.title}</Text>
            <View style={styles.imageCardView}>
            <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: productsData.item.imageHref,
            // headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
      </View>

            </View>
            <View style={styles.rightView}>
            <Text style={styles.labelText}>{productsData.item.description}</Text>
            <View style={styles.tagView}>
            <Text style={styles.tagText}>{productsData.item.title}</Text>
            </View>
            <Text style={styles.priceText}>{productsData.item.title}</Text>
            </View>

        </View>
        </Pressable>
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
       // alignItems: 'center',
       // justifyContent: 'center',
       // borderWidth: 1,
        margin: 2,
        flexDirection: 'column',
       // flex: 1,
       // backgroundColor:'blue'
    },
    rightView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
       // borderWidth: 1,
        marginLeft: 10,
        flex:1
    },

    cardView: {
        flex: 1,
        //backgroundColor: 'yellow',
        padding: 8,
        margin:8,
        flexDirection: 'row',
        height:100,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:10
    },
    imageView:{
        width:50,
        height:50,
    },
    imageCardView:{
        margin:5,
       // backgroundColor:'black',
        width:50,
        height:50,
        flex:1
    },
    textView:{
        color:'black'
        
    },
    labelText:{
        color:'black'

    },
    tagView:{
       // backgroundColor:'blue',
        marginTop:10


    },
    tagText:{
        color:'black'
    },
    priceText:{
        color:'black',
        marginTop: 10
    }
});

export default React.memo(ProductCell);

