import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList=[
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LxazqbVpovGzR5Nq9KUIvB1d0ZqRiCOZHw&usqp=CAU'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://www.jharkhanditsolutions.com/wp-content/uploads/2023/05/Banner-1.png'
        }
    ]
  return (
    <View style={{marginTop:10}}>
        <FlatList
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <Image source={{uri:item.imageUrl}}
                    style={{
                        width:Dimensions.get('screen').width*0.9,
                        height:170,
                        borderRadius:10,
                        margin:2
                    }}
                />
            )}
        />
    </View>
  )
}