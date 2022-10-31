import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { global_styles } from '../assets/styles'
import CometButton from '../components/CometButton'

type Props = {
  navigation: any
}

const AUMB_CheckIn: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={[global_styles.container, global_styles.greenBG]}>
      <Text style={global_styles.text}>This is the Check In screen of the app</Text>
      {/* <CometButton onPress={() => navigation.navigate('Home')}>Home</CometButton> */}
      <CometButton onPress={() => navigation.navigate('Sign In')}>Sign In</CometButton>
    </View>
  )
}
export default AUMB_CheckIn