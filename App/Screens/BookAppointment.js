import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentDoctorInfo from '../Components/BookAppointment/AppointmentDoctorInfo';
import ActionButton from '../Components/DoctorDetail/ActionButton';
import HorizontalLine from '../Components/Shared/HorizontalLine';
import BookingSection from '../Components/BookAppointment/BookingSection';

export default function BookAppointment() {
    const param = useRoute().params;

  return (
    <ScrollView style={{padding:20}}>
      <AppointmentDoctorInfo doctor={param.doctor}/>
      <ActionButton/>
      <HorizontalLine/>
      <BookingSection/>
    </ScrollView>
  )
}