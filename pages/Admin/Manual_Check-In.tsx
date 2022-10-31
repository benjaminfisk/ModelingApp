import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { global_styles } from '../../assets/styles'
import Header from '../../components/Header'

type Props = {
  navigation: any
}

const Manual_Check_In: React.FC<Props> = (props) => {
  const { navigation } = props
  return (
    <View style={global_styles.container}>
      <Header title="MANUAL CHECK-IN"/>
      <Text style={global_styles.pageTitle}>MANUAL CHECK-IN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default Manual_Check_In