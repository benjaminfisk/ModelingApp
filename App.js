import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CometButton from './components/CometButton';
import ComentInput from './components/CometInput';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
          <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Check In" component={CheckIn} />
      </Stack.Navigator>
      <View style={[styles.container,styles.blueBG]}>
        <Text>This is part of the App component.</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
function HomeScreen ({ navigation }) {
  return (
    <View style={[styles.container, styles.redBG]}>
      <Text style={styles.text}>This is the Home screen of the app</Text>
      <CometButton onPress={() => navigation.navigate('Sign In')}>Sign In</CometButton>
      <CometButton onPress={() => navigation.navigate('Check In')}>Check In</CometButton>
    </View>
  );
}
function SignIn( { navigation } ) {
  return (
    <View style={[styles.container, styles.yellowBG]}>
      <Text style={styles.text}>This is the SignIn screen of the app</Text>
      <CometButton onPress={() => navigation.navigate('Home')}>Home</CometButton>
      <CometButton onPress={() => navigation.navigate('Check In')}>Check In</CometButton>
    </View>
  )
}
function CheckIn( { navigation } ) {
  return (
    <View style={[styles.container, styles.greenBG]}>
      <Text style={styles.text}>This is the CheckIn screen of the app</Text>
      <CometButton onPress={() => navigation.navigate('Home')}>Home</CometButton>
      <CometButton onPress={() => navigation.navigate('Sign In')}>SignIn</CometButton>
    </View>
  )
}


const styles = StyleSheet.create({
  text : {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  redBG: {
    backgroundColor: '#ff000080',
  },
  blueBG: {
    backgroundColor: '#0000ff80',
  },
  greenBG: {
    backgroundColor: '#00ff0080',
  },
  yellowBG: {
    backgroundColor: '#ffff0080',
  },
});
