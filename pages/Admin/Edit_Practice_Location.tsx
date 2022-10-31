import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { global_styles } from '../../assets/styles'
import CometButton from '../../components/CometButton'

type Props = {
  navigation: any
}

const Edit_Practice_Location: React.FC<Props> = (props) => {
  const { navigation } = props
  return (
    <View>
      <Text>Edit_Practice_Location</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default Edit_Practice_Location