import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, useState } from 'react-native';
import Login from './App/Screens/Login';
import Home from './App/Screens/Home';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return isLoggedIn ? (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Login setIsLoggedIn={setIsLoggedIn} />
    </SafeAreaView>
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
