/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Home} from './HomeScreen/Home'
//import {VerifyOTP} from './VerifyOTP/VerifyOTP'
import MultiSelectList from './MultiSelectList';
import ListView from './ListView';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ListView/>
   // <VerifyOTP/>
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen
  //     name="Home"
  //     component={Home}
  //     options={{ title: 'My Home Screen' }} />
   
  //   {/* <Stack.Screen
  //     name="Details"
  //     component={DetailsScreen}  />
   
  //    <Stack.Screen
  //     name="Contact"
  //     component={ContactScreen}  /> */}
   
  // </Stack.Navigator>
  // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
