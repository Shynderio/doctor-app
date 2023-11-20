import { View, Text } from 'react-native'
// import React from 'react'
import * as React from 'react';
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import Home from '../Screens/Home'
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    // <Home/>
    
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='Home' component={HomeNavigation} 
            options={{
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home" size={size} color={color}/>
                )
            }}
        />
        <Tab.Screen name='Appointment' component={Appointment} options={{
                tabBarIcon:({color,size})=>(
                    <Ionicons name="calendar" size={size} color={color}/>
                )
            }}
        />
        <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon:({color,size})=>(
                    <Ionicons name="person" size={size} color={color}/>
                )
            }}
        />
    </Tab.Navigator>

  )
}