import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function DoctorCardItem({ doctor }) {
    return (
        <View style={{
            backgroundColor:Colors.white,
            borderRadius:10,
            marginBottom:20,
            padding:10
            
        }}>
            <View style={{
                width: Dimensions.get('screen').width * 0.9,
                display: 'flex',
                flexDirection: 'row',
                gap: 7,
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: Colors.white
            }}>
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/003/773/576/non_2x/business-man-icon-free-vector.jpg' }}
                    style={{
                        width: 150, height: 150, borderRadius: 10
                    }} />
                <View style={{
                    flex: 1,
                    padding: 20
                }}>
                    <Text style={{
                        fontFamily: 'appfont-bold',
                        marginTop: 4,
                        flexWrap: 'wrap'
                    }}>Dr. {doctor.attributes.FirstName} {doctor.attributes.LastName}</Text>
                    <FlatList
                        data={doctor.attributes.Specialization}
                        horizontal={true}
                        renderItem={({item})=>(
                            <Text style={{
                                fontFamily: 'appfont-light',
                                color: Colors.GRAY,
                                marginTop: 3,
                            }}>{item},</Text>
                        )}
                    />
                    <Text style={{
                        fontFamily: 'appfont',
                        color: Colors.PRIMARY,
                        marginTop: 3,
                        flexWrap: 'wrap'
                    }}>{doctor.attributes.Description}</Text>
                </View>
            </View>
            <TouchableOpacity style={{
                marginTop: 10, padding: 10,
                backgroundColor: Colors.SECONDARY,
                borderRadius: 10
            }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                    fontFamily: 'appfont-semi'
                }}>Make an Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}