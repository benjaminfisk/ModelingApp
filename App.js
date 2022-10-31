import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CometButton from './components/CometButton';
import AUMB_CheckIn from './pages/AUMB_CheckIn';
import Sign_In from './pages/Sign_In';
import View_All_Checked_In from './pages/Admin/View_All_Checked_In';
import { global_styles } from './assets/styles';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  //Admin Tab Navigation
  TabNavigator = () => {
    return (
      <Tab.Navigator style={global_styles.container}>
        <Tab.Screen
          name="Home"
          component={AdminArea}
          options={{ headerShown: false }}
        />
        {/* <Tab.Screen name="Sign In" component={Sign_In} /> */}
        <Tab.Screen
          name="Check In"
          component={AUMB_CheckIn}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="View All Checked In"
          component={View_All_Checked_In}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    )
  }

  //Drawer Navigation
  DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={Sign_In}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Admin Area"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Check In"
          component={AUMB_CheckIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <View style={[styles.app, global_styles.blueBG]}>
        <Text style={[global_styles.text, { color: 'white' }]}>This is part of the App component.</Text>
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

function AdminArea({ navigation }) {
  return (
    <View style={[global_styles.container, global_styles.redBG]}>
      <Text style={global_styles.text}>This is the Admin area of the app</Text>
      <CometButton onPress={() => navigation.navigate('Sign In')}>Sign In</CometButton>
      <CometButton onPress={() => navigation.navigate('Check In')}>Check In</CometButton>
    </View>
  );
}
