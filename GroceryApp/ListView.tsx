import React, { useState,useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StyleSheet,TextInput } from 'react-native';
const { width } = Dimensions.get('window');
import CardView from './CardView';
import ProductsScreen from './ProductsScreen';


const ListView = ({navigation}) => {

    const productsData = 
        [
            {
              "name": "Sub",
              "image": "sub.png",
              "actual_price": 200,
              "discount": "20",
              "buying_price": 160,
              "portion": "6 inch"
            },
            {
              "name": "Podu",
              "image": "podu.png",
              "actual_price": 50,
              "discount": "10",
              "buying_price": 45,
              "portion": "2 pieces"
            },
            {
              "name": "Pani Pori",
              "image": "pani-pori.png",
              "actual_price": 30,
              "discount": "",
              "buying_price": 30,
              "portion": "8 pieces"
            }
          ]

 const data = JSON.parse(JSON.stringify(productsData));

 useEffect(() => {
  setFilteredDataSource(data)
  }, []);
    
    const [brands, setBrands] = React.useState(data);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const searchFilterFunction = (text: string) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = brands.filter(
            function (item: { name: string; }) {
              const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(data);
          setSearch(text);
        }
      };

   
    const renderBrands  = ({ item}) => {
      
        return (
            <CardView 
             productsData = {item}/>    
        );    
    };

    const onBackgroundPressed  = () => {
      navigation.navigate('ProductsScreen');
      console.log('shenu flat list item pressed');

    }


    return (
        <View style={styles.container}>
       <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
            <FlatList
                showsVerticalScrollIndicator={true}
                data={filteredDataSource}
                renderItem={renderBrands}
                scrollEnabled={true}
                onTouchStart={onBackgroundPressed}
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
 
        textInputStyle: {
            height: 40,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 5,
            borderColor: '#009688',
            backgroundColor: '#FFFFFF',
          },
    
});


export default ListView;

function filter(fullData: never[], arg1: (user: any) => boolean) {
    throw new Error('Function not implemented.');
}
