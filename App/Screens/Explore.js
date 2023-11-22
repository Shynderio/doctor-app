import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import DoctorTab from '../Components/DoctorScreens/DoctorTab'
import Speciality from '../Components/DoctorScreens/Speciality';
import GlobalApi from '../Services/GlobalApi';
import DoctorList from '../Components/DoctorScreens/DoctorList';
import Colors from '../../assets/Shared/Colors';

export default function Explore() {

    return (
        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 26,
                fontFamily: 'appfont-semi'
            }}>Explore</Text>
            <View style={{
                borderBottomWidth: 2,
                borderBottomColor: Colors.PRIMARY,
                padding: 3,
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: 'appfont',
                    fontSize: 18,
                    color: Colors.GRAY
                }}>
                    Doctors
                </Text>
            </View >
            <DoctorList all={true} />
        </View>
    )
}