import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image,PixelRatio, FlatList} from 'react-native';
//const jwt = require('jsonwebtoken');
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  // marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  const navigation = useNavigation()
 
  useEffect(()=>{
    const token = AsyncStorage.getItem('librasptbtoken')
     // let decodedToken;
     // try {
      //  decodedToken = jwt.verify(token, 'somesupersecretsecret');
      //} catch (err) {
      //  err.statusCode = 500;
      //  console.log('erro')
    //  }

      if(token){
        setTimeout(()=>{navigation.navigate('Categorias')}, 300)
     
      } else{
        setTimeout(()=>{navigation.navigate('FirstScreen')}, 300)
      }
    
  },[])
    const checkToken = async () =>{
     
         /* if(token!=null){
        navigation.navigate('Categorias')
       }
       */
         /* console.log(token)
         let decodedToken;
         try {
           decodedToken = jwt.verify(token, 'somesupersecretsecret');
           navigation.navigate('Categorias')
         } catch (err) {
           err.statusCode = 500;
           console.log('erro')
           navigation.navigate('FirstScreen')
         }
         */
    }
    checkToken()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('../../../assets/clean_logo.png')}></Image>
      <Text style={styles.text}>Libras-PTB</Text>

      
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
