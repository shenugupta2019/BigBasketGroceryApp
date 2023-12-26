import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { homeStyle } from '../HomeScreen/Home-styles';
import { useState } from 'react';

export const Home = () => {
  const [number, setNumber] = useState('');

  const onSubmitButton = () => {

  };


  return (
    <>
      <TextInput
        style={homeStyle.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
        placeholderTextColor="#000" 
      />

      <Button
        onPress={onSubmitButton()}
        style={homeStyle.button}
        title="Submit"

       
      />
    </>
  );
};

export default Home;