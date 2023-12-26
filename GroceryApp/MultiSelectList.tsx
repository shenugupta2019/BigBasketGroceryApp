import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');



const MultiSelectList = () => {

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

const renderBrands = ({ item, index }) => {
  const { name, slug } = item;
  const isSelected = selectedBrands.filter((i) => i === slug).length > 0;

  return (
    <TouchableOpacity
      onPress={() => {
        if (isSelected) {
          setSelectedBrands((prev) => prev.filter((i) => i !== slug));
        } else {
          setSelectedBrands(prev => [...prev, slug])
        }
      }}
      style={[styles.item, isSelected && { backgroundColor: 'black'}]}>
      <Text style={{ color: isSelected ? "white" : "black"}}>{name}</Text>
    </TouchableOpacity>
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
    backgroundColor: '#fff',
    padding: 8,
    flexDirection: 'column',
    width: 400,
    height: 300,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 2,
    width: 80,
    height: 40,
  },
});


export default MultiSelectList;