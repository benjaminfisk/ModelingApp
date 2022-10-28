import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Sign_In( { navigation } ) {
  return (
    <View>
      <Image source={require('../assets/Logo.svg')} style={styles.logo} />
      <Text>Sign_In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
})