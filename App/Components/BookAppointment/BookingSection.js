import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import Colors from '../../../assets/Shared/Colors'
import SubHeading from '../Home/SubHeading'
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native'
import GlobalApi from '../../Services/GlobalApi'

export default function BookingSection({doctor}) {

    const {isLoaded, isSignIn, user} = useUser();

    useEffect(()=>{
        getDays();
        getTime();
        // bookAppointment()
    }, [])
    const [selectedDate, setSelectedDate]= useState([]);
    const [selectedTime, setSelectedTime]= useState([]);
    const [timeList, setTimeList]= useState([]);
    const navigation=useNavigation();
    const [next7Days, setNext7Days] = useState([]);
    const getDays=()=>{ 
        const today=moment()
        const nextSevenDays=[];
        for(let i = 0; i < 7; i++){
            const date = moment().add(i,'days');
            // console.log("today:",  moment())
            nextSevenDays.push({
                date:date,
                day:date.format('ddd'),
                formatedDate:date.format('Do MMM')
            })
        }
        // console.log(nextSevenDays)
        setNext7Days(nextSevenDays)
    }
    const getTime=()=>{ 
        const timeList=[];
        for(let i = 8; i <= 12; i++){
            // console.log("today:",  moment())
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i = 1; i <= 6; i++){
            // console.log("today:",  moment())
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList)

    }

    const bookAppointment=()=>{
        console.log("date: ", selectedDate)
        console.log("time:", selectedTime)
        if (selectedDate != '' && selectedTime != '') {
            const combinedDateTime = moment(selectedDate).format('YYYY-MM-DD') + 'T' + moment(selectedTime, 'hh:mm A').format('HH:mm:ss');
            // Now combinedDateTime holds the selected date and time in the format YYYY-MM-DDTHH:MM:SS
            
            // You can use combinedDateTime in your data object or perform further operations with it
            const data = {
                userId: "655a9faafa490f31780471cf",
                doctorId: doctor.doctorId,
                dateTime: combinedDateTime,
                // Other properties...
            };
            GlobalApi.bookAppointment(data)
            // console.log('user', user)
            // Perform actions with the combined date and time
            console.log('Combined Date and Time:', combinedDateTime);
            console.log('Appointment Data:', data);
        } else {
            // Handle the case where either the date or time is not selected
            console.error('Please select both date and time');
        }
    }
    
  return (
    <View>
      <Text style={{
        fontSize:18,
        color:Colors.GRAY
      }}>Book Appointment</Text>

      <SubHeading subHeadingTitle={'Day'} seeAll={false}/>
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity 
                style={
                    [   styles.dayButton,
                        selectedDate==item.date
                        ?{backgroundColor:Colors.PRIMARY}
                        :null
                ]
                }
                onPress={()=>setSelectedDate(item.date)}
            >
                <Text style={[{
                    fontFamily:'appfont'
                },
                selectedDate==item.date
                ?{color:Colors.white}
                :null
                ]}>{item.day}</Text>
                <Text style={{
                    fontFamily:'appfont-semi',
                    fontSize:16
                }}>{item.formatedDate}</Text>
                {/* <Text>{item.day}</Text> */}
            </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={'Time'} seeAll={false}/>
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity 
                style={
                    [   styles.dayButton,
                        selectedTime==item.time
                        ?{backgroundColor:Colors.PRIMARY}
                        :null
                ]
                }
                onPress={()=>setSelectedTime(item.time)}
            >
                

                <Text style={[{
                    fontFamily:'appfont-semi',
                    fontSize:16
                    
                },
                selectedTime==item.time
                ?{color:Colors.white}
                :null]}>{item.time}</Text>
                {/* <Text>{item.day}</Text> */}
            </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={'Note'} seeAll={false}/>
      <TextInput
      numberOfLines={3}
      style={{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:10,
        borderRadius:10,
        borderColor:Colors.SECONDARY,
        borderWidth:1,
        textAlignVertical:'top'
      }}
      placeholder='Write Your Notes Here'
      />
      <TouchableOpacity
                onPress={()=>
                    // navigation.navigate('book-appointment',{
                    // doctor:doctor})
                    bookAppointment()
                }
                style={{
                    padding: 13,
                    backgroundColor: Colors.PRIMARY,
                    margin: 10, borderRadius: 99,
                    left: 0, right: 0, marginBottom: 10, zIndex: 20
                }}>
                <Text style={{ color: Colors.white, textAlign: 'center', fontFamily: 'appfont-semi', fontSize: 17 }}>
                    Make Appointment
                </Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    dayButton:{
        borderWidth:1,
        borderRadius:99,
        padding:5,
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight:10,
        borderColor:Colors.GRAY        
    }
})