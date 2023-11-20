import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import DoctorTab from '../Components/DoctorScreens/DoctorTab';
import Speciality from '../Components/DoctorScreens/Speciality';
import GlobalApi from '../Services/GlobalApi';
import DoctorList from '../Components/DoctorScreens/DoctorList';


export default function DoctorListScreen() {
    const [specialization, setSpecialization] = useState([]);   
    const param=useRoute().params;
    const categoryName = param?.categoryName;
    const [activeTab, setActiveTab]=useState('Description');



    useEffect(()=>{
        getSpecialization();
    },[])
        
    const getSpecialization=()=>{
        GlobalApi.getSpecialization(categoryName).then(resp=>{
            setSpecialization(resp)
            console.log(resp)
        })
    }


  return (
    <View style={{padding:20}}>

      <PageHeader title={categoryName}/>
      <DoctorTab activeTab={(value)=>setActiveTab(value)}/>
      {
          activeTab=='Description'
          ?<Speciality/>
          :<DoctorList doctorList={categoryName}/>
      }
    
    </View>
  )
}