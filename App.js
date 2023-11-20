import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from './App/Screens/Login'
import Home from './App/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  if (!fontsLoaded){
    return null;
  }
  return (
    <ClerkProvider publishableKey={"pk_test_c3VpdGFibGUtY29yYWwtNjcuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
      <SignedIn>
        {/* <Home/> */}
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Login/>
      </SignedOut>
      </SafeAreaView>
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
