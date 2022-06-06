import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image,PixelRatio, FlatList} from 'react-native';
import axios from "axios";
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  // marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  const navigation = useNavigation()
  var blabla;
  var axios = require("axios").default;
/*
async function SignUp(){
  const req = await fetch("http://localhost:3001/categoria",{
    method:'GET',
    header:{
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    
  }) 
  const reqq= await req.json()
  AsyncStorage.setItem('token', 'res.token');
  console.warn(reqq)
}
*/
async function SignUp(){


const options = {method: 'GET', url: 'http://10.0.2.2:3001/categoria'};

axios.request(options).then(function (response) {
  console.warn(response.data);
}).catch(function (error) {
  console.error(error);
});
}
SignUp()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>SignUp</Text>
      <Image source={{ uri: 'IMAGEM'}} style={{width:150, height:150}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219EBC',
     alignItems:'center',
     justifyContent:'center'
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(105),
    height:PixelRatio.getPixelSizeForLayoutSize(105),
    flexDirection: 'column',
    marginTop: - PixelRatio.getPixelSizeForLayoutSize(50),
 
  },
  text:{
    fontSize: 25*PixelRatio.getFontScale(),
    color: '#00537A',
    justifyContent: 'center',
   textAlign: 'center',
    fontWeight: 'bold',
    width: 300,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(20),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
});
