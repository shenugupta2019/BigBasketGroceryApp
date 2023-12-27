import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import CardView from './CardView';


const ListView = () => {

    const BRANDS = [
        {
            name: 'Toyota',
            slug: 'toyota',
        },
        {
            name: 'Mazda',
            slug: 'mazda',
        },
        {
            name: 'Honda',
            slug: 'honda',
        },
        {
            name: 'Tesla',
            slug: 'tesla',
        },
        {
            name: 'BMW',
            slug: 'bmw',
        },
        {
            name: 'Marcedez',
            slug: 'marcedez',
        },
        {
            name: 'Proton',
            slug: 'proton',
        },
        {
            name: 'Renault',
            slug: 'renault',
        },
    ];
    const [brands, setBrands] = React.useState(BRANDS);
    const [selectedBrands, setSelectedBrands] = React.useState([]);


    const [selectedIds, setSelectedIds] = useState([]);
  

   
    const renderBrands  = ({ item, index }) => {
      
        return (
            <CardView/>    
        );    
    };


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={true}
                data={brands}
                renderItem={renderBrands}
                scrollEnabled={true}
            />
        </View>
    );
}

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
});


export default ListView;