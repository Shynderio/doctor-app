import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import moment from 'moment';
import url from '../../../assets/images/url';
import { Ionicons } from '@expo/vector-icons'

export default function AppointmentCardItem({ appointment }) {
    const startTime = appointment.attributes.startTime
    const extractedDate = moment(startTime).format('MMMM Do YYYY');

    // Convert back to time format (HH:mm)
    const extractedTime = moment(startTime).format('HH:mm A');
    const handleDelete = () => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this appointment?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        // Here, you can add the logic to delete the appointment
                        // For example, call an API to delete the appointment
                        // You might have an onDeleteAppointment function passed as a prop
                        // Call that function here and pass the appointment ID
                        console.log('delete')
                        // onDeleteAppointment(appointment.id);
                    },
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.LIGHT_GRAY,
            borderRadius: 10,
            backgroundColor: Colors.white,
            marginTop: 15
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20, alignItems: 'flex-end'
            }}>
                <Text style={{
                    fontSize: 16,
                    marginTop: 10,
                    fontFamily: 'appfont-semi'
                }}>{extractedDate} - {extractedTime}</Text>
                <TouchableOpacity onPress={handleDelete}>
                    <Ionicons style={{ marginLeft: 50 }} name="trash" size={22} color={Colors.RED} />
                </TouchableOpacity>
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10, alignItems: 'center'
            }}>
                <Image source={{ uri: url.doctor }}
                    style={{
                        height: 100,
                        borderRadius: 10,
                        width: 90
                    }}
                />
                <View>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'appfont-semi'
                    }}>{appointment.attributes.doctorName}</Text>

                    {appointment == 'pending'
                        ? <View style={{
                            display: 'flex', flexDirection: 'row',
                            gap: 5, alignItems: 'center', marginTop: 5
                        }}>


                            <Ionicons name="checkbox" size={22} color={Colors.GRAY} />
                            <Text style={{
                                fontFamily: 'appfont', color: Colors.GRAY
                            }}>Pending</Text>


                        </View>
                        : <View style={{
                            display: 'flex', flexDirection: 'row',
                            gap: 5, alignItems: 'center', marginTop: 5
                        }}>


                            <Ionicons name="checkbox" size={22} color={Colors.PRIMARY} />
                            <Text style={{
                                fontFamily: 'appfont', color: Colors.GRAY
                            }}>Booked</Text>


                        </View>

                    }

                    <View style={{
                        display: 'flex', flexDirection: 'row',
                        gap: 5, alignItems: 'center', marginTop: 5
                    }}>
                        <Ionicons name="document-text" size={22} color={Colors.PRIMARY} />
                        <Text style={{
                            fontFamily: 'appfont', color: Colors.GRAY
                        }}>Booking Id: #{appointment.id}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}