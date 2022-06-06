import React from 'react';
import { StyleSheet, TouchableHighlight, PixelRatio, Text} from 'react-native';

export default function BlueButton(props){
    
    
    return(
        <TouchableHighlight style={{...styles.Button, width: props.width*PixelRatio.get(), height: props.height*PixelRatio.get(), }}  onPress={()=>{navigation.navigate(props.navigate)}} >
            <Text style={styles.Text}>{props.content}</Text>
        </TouchableHighlight>
    )

    }    
const styles = StyleSheet.create({
    Button:{
      backgroundColor: "#8ECAE6",
      borderRadius: 35,
      flex: 0,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    Text:{
        color:'#023047',
        fontSize:20,
        fontWeight: '800'
    }
})

