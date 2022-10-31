import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CometButton from './components/CometButton';
import AUMB_CheckIn from './pages/AUMB_CheckIn';
import Sign_In from './pages/Sign_In';
import View_All_Checked_In from './pages/Admin/View_All_Checked_In';
import Roster from './pages/Admin/Roster';
import Past_Attendance from './pages/Admin/Past_Attendance';
import Manual_Check_In from './pages/Admin/Manual_Check-In';
import Edit_Practice_Location from './pages/Admin/Edit_Practice_Location';
import { global_styles, colors } from './assets/styles';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  //Admin Tab Navigation
  const TabNavigator = () => {
    return (
      <Tab.Navigator style={global_styles.container}>
        <Tab.Screen
          name="Manual Check In"
          component={Manual_Check_In}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="View All Checked In"
          component={View_All_Checked_In}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Past Attendance"
          component={Past_Attendance}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Edit_Practice_Location"
          component={Edit_Practice_Location}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Roster"
          component={Roster}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    )
  }

  //Drawer Navigation
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.header} />
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
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 45,
    backgroundColor: colors.primary,
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
