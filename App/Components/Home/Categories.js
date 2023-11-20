import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const navigation = useNavigation()
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        getSpecializations();
    }, [])

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
                    categoryName:item.attributes.Name
                })}
                style={{alignItems:'center'}}>
                    <View style={{
                        backgroundColor:Colors.SECONDARY,
                        padding:15,
                        borderRadius:99,
                    }}>
                        <Image
                            source={{
                                uri:item.attributes.Icon.data.attributes.url
                            }}
                            style={{
                                width:30, height:30
                            }}
                        />
                    </View>
                    <Text>{item.attributes.Name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}