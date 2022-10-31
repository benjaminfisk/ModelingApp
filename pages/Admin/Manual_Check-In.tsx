import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { global_styles } from '../../assets/styles'
import CometButton from '../../components/CometButton'

type Props = {
  navigation: any
}

const Manual_Check_In: React.FC<Props> = (props) => {
  const { navigation } = props
  return (
    <View>
      <Text>Manual_Check-In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default Manual_Check_In