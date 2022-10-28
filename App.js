import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CometButton from './components/CometButton';
import AUMB_CheckIn from './pages/AUMB_CheckIn';
import Sign_In from './pages/Sign_In';
import { global_styles } from './assets/styles';


export default function App() {
  const Stack = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator style={global_styles.container}>
          <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="Sign In" component={Sign_In} />
          <Stack.Screen name="Check In" component={AUMB_CheckIn} />
      </Stack.Navigator>
      <View style={[styles.app,global_styles.blueBG]}>
        <Text style={[global_styles.text, {color: 'white'}]}>This is part of the App component.</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '20%',
  }
});

function HomeScreen ({ navigation }) {
  return (
    <View style={[global_styles.container, global_styles.redBG]}>
      <Text style={global_styles.text}>This is the Home screen of the app</Text>
      <CometButton onPress={() => navigation.navigate('Sign In')}>Sign In</CometButton>
      <CometButton onPress={() => navigation.navigate('Check In')}>Check In</CometButton>
    </View>
  );
}
