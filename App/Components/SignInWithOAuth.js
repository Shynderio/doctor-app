import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, TextInput, View } from "react-native";
import { useOAuth, useSignIn } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import Colors from '../../assets/Shared/Colors'
import GlobalApi from "../Services/GlobalApi";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  useWarmUpBrowser();
  const { signIn, setActive, isLoaded } = useSignIn();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressOAuth = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      console.log(createdSessionId)
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  
  const onPressSignIn = React.useCallback(async () => {
    try {
      const response = await fetch(GlobalApi.BASE_URL + 'authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: 'abc123',
        }),
      });
      
      if (response.status) {
        const completeSignIn = await signIn.create({
          identifier: 'nguyenducthinhch2@gmail.com',
          password:'thinhvipch2'
        });
       
        // console.log(completeSignIn)
        await setActive({ session: 'bur' });
      } else {
        console.log('Unsuccessful login');
      }
    } catch (error) {
      console.error('Login error:', error); // Log the complete error object
      console.error('Error Message:', error.message); // Log the error message
      console.error('Error Stack:', error.stack); 
    }
  },[]);

  return (
    <View style={styles.container}>
      {/* Username input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {/* Button for normal sign-in */}
      <TouchableOpacity onPress={onPressSignIn} style={styles.loginButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Button for Google OAuth */}
      <TouchableOpacity onPress={onPressOAuth} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.white,
  },
  loginButton: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 90,
    alignItems: 'center',
    marginTop: 20,
    width: Dimensions.get('window').width * 0.8,
  },
});

export default SignInWithOAuth;
