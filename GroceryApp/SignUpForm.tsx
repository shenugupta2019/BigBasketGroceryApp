import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { homeStyle } from './HomeScreen/Home-styles';
import { useState } from 'react';

export const SignUpForm = () => {
  const [number, setNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

   const onSubmitButton = () => {
    postApiCall();
  };

   const postApiCall = async () => {
    const url = 'www.google.com';
    const bodyData = {
        contact:number,
        userName:userName,
        email:email,
    };

    const config = {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(bodyData)
    };
try {
    const response = await fetch(url, config);
       const json = response.json;

    }
  
  catch(err) {

  }
};

const fetchData  = async() => {
  try{

  const res = await fetch('url');
  const data = res.json;

  }
  catch(err) {
    console.log('data');

  }



}



  

  return (
    <>
    <View>
      <TextInput
        style={homeStyle.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
        placeholderTextColor="#000" 
      />
      <TextInput>
        placeholder = "Enter UserName"
        onChangeText={setUserName}
        value={userName}
      </TextInput>

      <TextInput>
        placeholder= "Enter Email"
        onChangeText={setEmail}
        value={email}
      </TextInput>

      <Button
        onPress={onSubmitButton()}
        style={homeStyle.button}
        title="Submit"
      />
    
      </View>
    </>
  );
};

export default SignUpForm;


const styles = StyleSheet.create({

});