/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";

import { DrawerNavigator } from "./routes";
import store from "./store/store";
import theme from "./theme.json";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Home} from './HomeScreen/Home';
//import {VerifyOTP} from './VerifyOTP/VerifyOTP'
import MultiSelectList from './MultiSelectList';
import ListView from './ListView';
import ProductsDataScreen from './ProdcutsDataScreen';
import SignUpForm from './SignUpForm';
import useFetch from './useFetch';
import {FixtureScreen} from './Fixture/Screen/FixtureScreen';
import itemsJSONData from './items.json';


function App(): JSX.Element {

  //const [itemData,setItemData] = useState[[Row]];
 // const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  var itemData  :[Row] = [];
  itemData = itemsJSONData.rows;

  console.log('json data rows', itemData);




 // const {products} = useFetch('https://dl.dropboxusercontent.com/s/2iodh4vg0eortkl/facts.json');

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };


  // const withEnhancement = (ProductsScreen) => {
  // return  function EnhacementComponent(props) {
  //   return(
  //     <ProductsScreen {...props email="someVal"/>})
  //   );
  // };

  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="ProductsDataScreen"
          component={ProductsDataScreen}
        />
        {/* <Stack.Screen
          name="fixtureScreen"
          component={FixtureScreen}
        /> */}
         <Stack.Screen
          name="SignUpForm"
          component={SignUpForm}
        />
          {/* <Stack.Screen name="ProductsScreen" component={ProductsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
      }


//   return (
//     <>
//       <IconRegistry icons={EvaIconsPack} />
//       <StatusBar barStyle={"dark-content"} />
//       <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
//         <Provider store={store}>
//           <NavigationContainer>
//             <DrawerNavigator />
//           </NavigationContainer>
//         </Provider>
//       </ApplicationProvider>
//     </>
//   );
// }

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
