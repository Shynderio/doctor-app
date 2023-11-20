import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import Colors from '../../assets/Shared/Colors';
import DoctorInfo from '../Components/DoctorDetail/DoctorInfo';
import url from '../../assets/images/url';

export default function DoctorDetails() {
    const [doctor, setDoctor] = useState();
    const param = useRoute().params;
    const navigation=useNavigation();
    useEffect(() => {
        setDoctor(param.doctor)
    })
    return doctor && (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <ScrollView>
                <View style={{
                    position: 'absolute', zIndex: 10,
                    margin: 15
                }}>
                    <PageHeader title={''} />
                </View>
                <View>
                    <Image source={{ uri: url.abyss }}
                        style={{
                            width: '100%',
                            height: 260
                        }}
                    />
                    <View style={{
                        marginTop: -20,
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 20
                    }}>
                        <DoctorInfo doctor={doctor} />
                        {console.log("doc 2:", doctor)}
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={()=>navigation.navigate('book-appointment',{
                    doctor:doctor
                })}
                style={{
                    padding: 13,
                    backgroundColor: Colors.PRIMARY,
                    margin: 10, borderRadius: 99,
                    left: 0, right: 0, marginBottom: 10, zIndex: 20
                }}>
                <Text style={{ color: Colors.white, textAlign: 'center', fontFamily: 'appfont-semi', fontSize: 17 }}>
                    Book Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}