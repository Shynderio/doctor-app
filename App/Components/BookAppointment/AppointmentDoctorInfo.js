import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Shared/PageHeader'
import url from '../../../assets/images/url'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../assets/Shared/Colors'
import HorizontalLine from '../Shared/HorizontalLine'
export default function AppointmentDoctorInfo({doctor}) {
  return (
    <View>
      <PageHeader title={'Book Appointment'}/>
      <View style={{marginTop:10, display:'flex',
        alignItems:'center',
        flexDirection:'row', gap:15}}>
        <Image source={{uri:url.abyss}}
            style={{width:100, height:100,borderRadius:99}}
        />
        <View>
            <Text style={{fontSize:20,
        fontFamily:'appfont-semi',
        marginBottom:8}}>{doctor.attributes.FirstName} {doctor.attributes.LastName}</Text>
            <View style={{
                    display: 'flex', flexDirection: 'row',
                    gap: 5, alignItems: 'center'
                }}>
                    <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'appfont',
                        color: Colors.GRAY,
                        width:'70%'
                    }}>{doctor.attributes.Address}</Text>
                </View>
        </View>
        <HorizontalLine/>
      </View>
    
    </View>
  )
}