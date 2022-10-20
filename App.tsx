/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import React from "react"; 
import Tabs from "./src/design/components/Tabs";
import SplashScreen from 'react-native-splash-screen'
import LoginPage from './src/design/screens/User/LoginPage';
import Favoritos from './src/design/screens/User/Favoritos';
import HomeScreen from './src/design/screens/User/HomeScreen';
import Menu_Item from './src/design/screens/User/Menu_Item';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Tabs/>
    // </NavigationContainer>

    // <HomeScreen/>
    <Menu_Item/>
  );
};


export default App;

