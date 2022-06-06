import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/views/SplashScreen';
import FirstScreen from './src/views/FirstScreen';
import SignIn from './src/views/SignIn';
import SignUp1 from './src/views/SignUp1';
import Categorias from './src/views/Categorias';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="Preload" component={SplashScreen}></Stack.Screen>
     <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
     <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
     <Stack.Screen name="SignUp1" component={SignUp1}></Stack.Screen>  
     <Stack.Screen name="FirstScreen" component={FirstScreen}></Stack.Screen>    
   </Stack.Navigator>
   </NavigationContainer>
  );
}

/*

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './scr/views/SplashScreen/index';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="SplashScreen"  component={SplashScreen} options={{headerShown: false}} />

      </Stack.Navigator>t
    </NavigationContainer>
  );
}

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

