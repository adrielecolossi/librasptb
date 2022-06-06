
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, PixelRatio, TouchableHighlight, Dimensions, SafeAreaView, Button} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import BlueButton from '../../components/BlueButton';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function FirstScreen(){
const enviaDados = async(e)=>{
  if(email== '' || password=='' ||  genero=='' || data=='' || nome==''){
    alert('Dados incompletos');
  } else{
    if(email.indexOf('@')!==-1){
    var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'http://10.0.2.2:3001/cadastrarUsuario',
  headers: {'Content-Type': 'application/json'},
  data: {
    email: email,
    senha: password,
    data: data,
    nome: nome,
    genero: genero
  }
};

axios.request(options).then(function (response) {
  console.log(response.data.token);
  AsyncStorage.setItem('librasptbtoken',response.data.token);
  AsyncStorage.setItem('user',response.data.email);
   navigation.navigate('Categorias')
}).catch(function (error) {
    alert(error)
  });

  } else{
    alert('Email sem @')
    setEmail('')
  }
  }
}

  const checaExistencia = async (e) => {
   
    var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'http://10.0.2.2:3001/checkExistence',
  headers: {'Content-Type': 'application/json'},
  data: {email: email}
};

axios.request(options).then(function (response) {
  console.log(response.data);
  if(response.data.length!=0){
alert('Este email já está sendo usado')
setEmail('')  
}

}).catch(function (error) {
  console.error(error);
});
    }

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datepicked) => {
  
    let datep = datepicked.toString().slice(4,15)
    let tempmonth = datepicked.toString().slice(4,7);
    let month;
    if(tempmonth=='Jan') month='01'
    if(tempmonth=='Feb') month='02'
    if(tempmonth=='Mar') month='03'
    if(tempmonth=='Apr') month='04'
    if(tempmonth=='May') month='05'
    if(tempmonth=='Jun') month='06'
    if(tempmonth=='Jul') month='07'
    if(tempmonth=='Aug') month='08'
    if(tempmonth=='Sep') month='09'
    if(tempmonth=='Oct') month='10'
    if(tempmonth=='Nov') month='11'
    if(tempmonth=='Dec') month='12' 
    let day = datepicked.toString().slice(8,10);
   let year= datepicked.toString().slice(11,15);
   let date = day + '/' + month + '/' + year
   setData(date)
    console.warn("A date has been picked: ", date );
    hideDatePicker();
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nome, setNome] = React.useState("");
  let [eye, setEye] = React.useState("openned");
  let [secure, setSecure] = React.useState(true);
  const [genero, setGenero] = React.useState('M');
  const [data, setData] = React.useState('Clique para selecionar ')
  const navigation = useNavigation()
  var radio_props = [
    {label: 'Masculino', value: "M" },
    {label: 'Feminino', value: "F" },
    {label: 'Outro', value: "O" }
  ];



if(eye=="openned"){  
  eye =  
  <TouchableHighlight onPress={()=>{setEye("closed"); setSecure(false)}} style={styles.TouchableHighlightEye}>
   <Image style={styles.eye} source={require(`../../../assets/${'openned-eye.png'}`)} onPress={()=>{setEye("closed")}}></Image>
</TouchableHighlight>
      
} else {
  eye =  <TouchableHighlight onPress={()=>{setEye("openned"); setSecure(true)}} style={styles.TouchableHighlightEye}>
  <Image style={styles.eye} source={require(`../../../assets/${'closed-eye.png'}`)}></Image>
</TouchableHighlight>
   
      
}

    return(
         <SafeAreaView style={styles.container}>
    <View style={styles.viewCriarConta}>
    <Text style={styles.textCriarConta}>Criar conta</Text>
    </View>
    <TextInput

        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.TextInput}
      
      />
      <View
  style={styles.line}
/>
<TextInput

        onChangeText={setNome}
        value={nome}
        placeholder="Nome de usuário"
        style={styles.TextInput}
      />
      <View
  style={styles.line}
/>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
<Text style={styles.radioFormText}>Gênero</Text>
<RadioForm
  radio_props={radio_props}
  initial={0}
  onPress={(value) => {setGenero(value); console.log(value)}}
  buttonSize={10}
  buttonColor={'#FFB703'}
  style= {styles.radioForm}
/>
<TouchableHighlight onPress={showDatePicker} style={{width:'70%', backgroundColor:'#FFB703', alignSelf:'center', marginBottom:'5%'}}>
<Text>Data de nascimento: {data}</Text>
</TouchableHighlight>
      <TextInput secureTextEntry={secure} value={password} placeholder='Senha' keyboardType='default' onChangeText={setPassword} style={styles.TextInput}/> 
      <View
  style={styles.line}
/>
      {eye}     
    
      <TouchableHighlight onPress={()=>{checaExistencia(); enviaDados()}} style={styles.Button}  >
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
    backgroundColor: '#FFFF'
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
    color: '#023047',
    justifyContent: 'center',
    alignSelf:'center',
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
  viewCriarConta:{
    backgroundColor: "#8ECAE6",
    width:'100%' ,
    height:'10%' ,
  },
  textCriarConta:{
   color: "#00537A",
   fontSize: 21*PixelRatio.getFontScale(),
   marginTop:23*PixelRatio.getFontScale(),
  },
  line:{
    borderBottomColor: '#FFB703',
    borderBottomWidth: 2,
    width: '80%',
    alignSelf:"center"
  },
  datapickerbutton:{
    width:'50%',
    marginTop: '20%'
  },
  eye:{
    width:'5%',
    height:'15%' ,
    position: 'relative',
    marginLeft:'80%'
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
    alignSelf:'center'
  },
  TextButton:{
      color:'#023047',
      fontSize:20,
      fontWeight: '800'
  },
  TextInput:{
   marginLeft:'10%',
   marginTop:'5%',
   marginBottom:'5%',
   color: 'black'
  },
 radioForm:{
   marginLeft:'15%',
   marginBottom:'10%'
 },
 radioFormText:{
  marginLeft:'10%',
  marginTop:'10%',
  marginBottom:'5%'
}
}
)
