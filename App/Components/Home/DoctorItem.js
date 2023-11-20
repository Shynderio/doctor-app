import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function DoctorItem({doctor}) {
  return (
    <View style={{width:200, 
    borderWidth:1, 
    borderColor:Colors.LIGHT_GRAY,
    borderRadius:10,
    marginRight:10
    }}>
      <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/003/773/576/non_2x/business-man-icon-free-vector.jpg'}}
      style={{width:'100%', height:110, borderTopLeftRadius:10,
    borderTopRightRadius:10}}
      />
      <View style={{padding:7}}>
        <Text style={{fontFamily:'appfont-semi',
    fontSize:16}}>{doctor.attributes.FirstName} {doctor.attributes.LastName}</Text>
        <Text style={{color:Colors.GRAY}}>{doctor.attributes.Description}</Text>
      </View>
    </View>
  )
}