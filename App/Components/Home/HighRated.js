import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalApi from '../../Services/GlobalApi'
import DoctorItem from './DoctorItem';

export default function HighRated() {
    
    const [doctalList, setDoctorList]=useState([]);
    useEffect(()=>{
        getHighRated()
        
    },[])
    const getHighRated=()=>{
        GlobalApi.getHighRated().then(resp=>{
            const highRatedDoctors = resp.filter(doctor => doctor.attributes.Rating > 4);
            setDoctorList(highRatedDoctors)
        })
    }
  return (
    <View style={{marginTop:10}}>
        <SubHeading subHeadingTitle={'Highly Rated Doctor'}/>
        <FlatList
        data={doctalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <DoctorItem doctor={item}/>
        )}
        />
    </View>
  )
}