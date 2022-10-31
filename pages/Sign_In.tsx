import { View, Text, StyleSheet, Image } from 'react-native'
import { global_styles } from '../assets/styles';
import CometButton from '../components/CometButton';
import React from 'react'

type Props = {
  navigation: any
}

const Sign_In: React.FC<Props> = ( props ) => {
  const { navigation } = props;
  return (
    <View style={[global_styles.container, global_styles.yellowBG]}>
      <Text style={global_styles.text}>This is the SignIn screen of the app</Text>
      <CometButton onPress={() => navigation.navigate('Check In')}>Student Sign In</CometButton>
      <CometButton onPress={() => navigation.navigate('Admin Area')}>Admin Sign In</CometButton>
    </View>
  )
}
export default Sign_In

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
})