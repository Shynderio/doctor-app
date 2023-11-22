import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import appImage from './../../assets/images/app.png';
import Colors from '../../assets/Shared/Colors';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={appImage} style={styles.appImage} />
      <View style={styles.content}>
        <Text style={styles.heading}>Doctor Appointment</Text>
        <Text style={styles.heading}>Booking App</Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  appImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: Colors.white,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

