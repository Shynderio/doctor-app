import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import ActionButton from './ActionButton'
import SubHeading from '../Home/SubHeading'
import HorizontalLine from '../Shared/HorizontalLine'

export default function DoctorInfo({ doctor }) {
    return doctor && (
        <View>
            {console.log(doctor)}
            <Text style={{
                fontSize: 23,
                fontFamily: 'appfont-semi'
            }}>{doctor.attributes.FirstName} {doctor.attributes.LastName}</Text>

            <FlatList
                data={doctor.attributes.Specialization}
                horizontal={true}
                renderItem={({ item }) => (
                    <Text style={{
                        // fontFamily: 'appfont-light',
                        color: Colors.GRAY,
                        marginRight: 10,
                    }}>{item},</Text>
                )}
            />

            <View style={{

            }}>
                <HorizontalLine/>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    gap: 5, alignItems: 'center'
                }}>
                    <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'appfont',
                        color: Colors.GRAY
                    }}>{doctor.attributes.Address}</Text>
                </View>

                <View style={{
                    display: 'flex', flexDirection: 'row',
                    gap: 5, alignItems: 'center',
                    marginTop: 6
                }}>
                    <Ionicons name="time" size={22} color={Colors.PRIMARY} />
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'appfont',
                        color: Colors.GRAY
                    }}>Mon Sun | 11AM - 8PM</Text>
                </View>

                <View style={{
                    borderBottomWidth: 1,
                    borderColor: Colors.LIGHT_GRAY,
                    margin: 5,
                    marginBottom: 15,
                    marginTop: 10
                }}>
                </View>
                <ActionButton />
                <View style={{
                    borderBottomWidth: 1,
                    marginTop: 15,
                    borderColor: Colors.LIGHT_GRAY,
                    margin: 5,
                    marginBottom: 10
                }}></View>
                <SubHeading subHeadingTitle={'About'}/>
                <Text>
                    {doctor.attributes.Description}
                </Text>
            </View>
        </View>
    )
}