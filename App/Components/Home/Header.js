import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Ionicons} from '@expo/vector-icons'

export default function Header() {
    const {isLoaded, isSignIn, user} = useUser();
    if(!isLoaded||isSignIn){
        return null
    }
  return (
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{
            display:'flex',
            flexDirection:'row', 
            gap:7,
            alignItems:'center'
        }}>
            <Image source={{uri:user.imageUrl}}
            style={{width:45, height:45, borderRadius:99}}
            />
            <View>
                <Text style={{fontFamily:'appfont'}}>Hello, 👋</Text>
                <Text style={{
                    fontSize:18, 
                    fontFamily:'appfont',
                    fontWeight:'bold'}}>{user.fullName}</Text>
            </View>

        </View>
        <Ionicons name="notifications-outline" size={30} color='black'/>
    </View>
  )
}