import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/app.png'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
  return (
    
    <View>
      {/* <Text>Login</Text> */}
      <Image souce={app} style={styles.appImage}/>
      <View style={{backgroundColor:Colors.white,
        padding:25,
        alignItems:'center',
    }}> 
        <Text style={styles.heading}>Doctor appointment</Text>
        <Text style={styles.heading}>booking App</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    appImage:{
        width:300,
        height:500,
        objectFit:'contain'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold'
    },
    buttonText:{
        fontSize:17,
        color:Colors.white
    },
    loginButton:{
        padding:16,
        backgroundColor:Colors.PRIMARY,
        borderRadius:90,
        alignItems:'center',
        marginTop:20,
        width:Dimensions.get('window').width*0.8,
    }
})
