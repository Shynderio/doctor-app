import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import DoctorItem from '../Home/DoctorItem'
import DoctorCardItem from './DoctorCardItem'
import Colors from '../../../assets/Shared/Colors';
import GlobalApi from '../../Services/GlobalApi';
import { useNavigation } from '@react-navigation/native';


export default function DoctorList({ category , all = false}) {

    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        all
        ?getHighRated()
        :getDoctorsBySpecialization()
    }, [])

    const getHighRated=()=>{
        GlobalApi.getHighRated().then(resp=>{
            setDoctorList(resp)
        })
    }
    const getDoctorsBySpecialization = () => {
        GlobalApi.getDoctorsBySpecialization(category)
            .then((resp) => {

                setDoctorList(resp);
                console.log(resp);
            })
            .catch((error) => {
                console.error('Error fetching doctors:', error.message);
            });
    };


    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 140, marginTop: 20 }}>
            {
                !doctorList?.length
                    ? <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
                    : <FlatList
                        showsVerticalScrollIndicator={false}
                        data={doctorList}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('doctor-detail', { doctor: item })}>
                                <DoctorCardItem doctor={item} />
                            </TouchableOpacity>
                        )}
                    />

            }
        </View>
    )
}