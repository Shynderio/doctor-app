import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DoctorListScreen from '../Screens/DoctorListScreen';
import Home from '../Screens/Home';
import DoctorDetails from '../Screens/DoctorDetails';
import BookAppointment from '../Screens/BookAppointment';

const Stack=createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='doctor-list-screen' component={DoctorListScreen}/>
        {/* <Stack.Screen name='Home' component={Home}/> */}
        <Stack.Screen name='doctor-detail' component={DoctorDetails}/>
        <Stack.Screen name='book-appointment' component={BookAppointment}/>
    </Stack.Navigator>
  )
}