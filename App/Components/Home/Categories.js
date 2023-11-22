import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const navigation = useNavigation()
    const [categoriesList, setCategoriesList] = useState([]);
    const [specs, setSpec] = useState([])
    // const allspec = GlobalApi.getAllSpecs()
    
    useEffect(() => {
        getSpecializations()
        // const allspec = GlobalApi.getAllSpecs()
        getSpecs()
    }, [])

    const getSpecs = () =>{
        GlobalApi.getSpecializations().then(resp =>{
            setSpec(resp)
            console.log("specs:", resp)
        })
    }

    const getSpecializations = () => {
        GlobalApi.getSpecializations().then(resp => {
            // console.log(resp)
            setCategoriesList(resp)
        })
    }
    if (!categoriesList) {
        return null;
    }
    return (
        <View style={{ marginTop: 10 }}>
            <SubHeading subHeadingTitle={'Doctor Speciality'}/>
            <FlatList
            data={categoriesList}
            numColumns={4}
            columnWrapperStyle={{
                flex:1,
                justifyContent:'space-between'
            }}
            renderItem={({item, index})=>index<4&&(
                <TouchableOpacity 
                onPress={()=>navigation.navigate('doctor-list-screen',
                {
                    categoryName:item.description
                })}
                style={{alignItems:'center'}}>
                    <View style={{
                        backgroundColor:Colors.SECONDARY,
                        padding:15,
                        borderRadius:99,
                    }}>
                        <Image
                            source={{
                                uri: (item.icon + "").replace(GlobalApi.DATA_Port, GlobalApi.BASE_URL)
                            }}
                            style={{
                                width:30, height:30
                            }}
                        />
                    </View>
                    <Text>{item.description}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}