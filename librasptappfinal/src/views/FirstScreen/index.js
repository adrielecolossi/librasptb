
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, PixelRatio, TouchableHighlight, Dimensions, SafeAreaView } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import BlueButton from '../../components/BlueButton';
import { useNavigation } from '@react-navigation/native';

export default function FirstScreen(){
  const navigation = useNavigation()
    return(
         <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/logolibrasptb.png')}></Image>
      <Text style={styles.text}>Este aplicativo tem como objetivo te auxiliar nos estudos da escrita na Língua Portuguesa e incentivar a leitura</Text>
      <TouchableHighlight onPress={()=>{navigation.navigate('SignUp1')}} style={styles.Button}  >
            <Text style={styles.TextButton}>Começar a aprender</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{navigation.navigate('SignIn')}}  >
      <Text style={styles.text}>Já tem uma conta?<Text style={styles.text_colored}>&nbsp;Entrar</Text></Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219EBC',
   alignItems: 'center'
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height:PixelRatio.getPixelSizeForLayoutSize(80),
    flexDirection: 'column',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20)
  },
  text:{
    fontSize: 21*PixelRatio.getFontScale(),
    color: 'white',
    justifyContent: 'center',
   textAlign: 'center',
    flexWrap: 'wrap',
    fontWeight: '600',
    width: 300,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20)
  },
  text_colored:{
    fontSize: 21*PixelRatio.getFontScale(),
    color: '#FFB703',
    fontWeight: '600',
  },
  Button:{
    backgroundColor: "#8ECAE6",
    borderRadius: 35,
    width:'50%' ,
    height:'10%' ,
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TextButton:{
      color:'#023047',
      fontSize:20,
      fontWeight: '800'
  }
}
)
