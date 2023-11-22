import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import GlobalApi from '../Services/GlobalApi'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem'

export default function Appointment() {
  const userId=1

  // const [appointmentList, setAppointmentList] = useState([]);
  const [appointments, setApppointments] = useState([]);
  useEffect(()=>{
    // if(userId){
      getUserAppointments()
    // }
  }, [])
  const getUserAppointments=()=>{
    GlobalApi.getUserAppointments().then(resp=>{
      setApppointments(resp)
      // console.log(resp)
      console.log("ap:", appointments)
    })
  }
  
  const getUserAppointments1=()=>{
    GlobalApi.getUserAppointments1('655a9faafa490f31780471cf','user' ).then(resp=>{
      setApppointments(resp)
      // console.log(resp)
      console.log("ap:", appointments)
    })
  }
  return (
    <View style={{padding:20}}>
      <PageHeader title={'My Appointments'} backButton={false}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginBottom:25}}
        data={appointments}
        renderItem={({item})=>( 
          <AppointmentCardItem appointment={item}/>
        )}      
      />

    </View>
  )
}