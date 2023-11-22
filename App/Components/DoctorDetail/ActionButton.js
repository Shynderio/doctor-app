import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../assets/Shared/Colors'

export default function ActionButton() {
    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:3,
            name:'Phone',
            icon:'call'
        },
        {
            id:4,
            name:'Direction',
            icon:'map'
        },
        {
            id:5,
            name:'Share',
            icon:'share'
        }
    ]
  return (
    
    <View style={{marginTop:15}}>
        <FlatList
    data={actionButtonList}
    horizontal={true}
    renderItem={({ item }) => (
        <TouchableOpacity style={{ paddingHorizontal: 4 }}>
            <View style={{
                backgroundColor: Colors.SECONDARY,
                padding: 13,
                borderRadius: 99,
                alignItems: 'center',
                width: 55,
                justifyContent: 'center',
                marginRight: 8, // Adjust spacing between items
            }}>
                <Ionicons name={item.icon} size={25} color={Colors.PRIMARY} />
            </View>
            <Text style={{
                fontFamily: 'appfont-semi',
                marginTop: 5,
                textAlign: 'center', // Center text
                width: 55, // Set width to match item width
            }}>{item.name}</Text>
        </TouchableOpacity>
    )}
/>

      {/* <FlatList
        data={actionButtonList}
        // columnWrapperStyle={{
        //     flex:1,
        //     justifyContent:'space-between'
        // }}
        // numColumns={5}
        horizontal={true}
        renderItem={({item})=>(
            <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{backgroundColor:Colors.SECONDARY, 
                    padding:13,
                    borderRadius:99,
                    alignItems:'center',
                    width:55
                    }}>  
                    <Ionicons name={item.icon} size={25} color={Colors.PRIMARY}/>
                </View>
                <Text style={{
                    fontFamily:'appfont-semi',
                    marginTop:5
                }}>{item.name}</Text>
            </TouchableOpacity>
        )
        }
      /> */}
    </View>
  )
}