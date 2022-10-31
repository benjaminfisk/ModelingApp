import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { global_styles } from '../../assets/styles'
import CometButton from '../../components/CometButton'

type Props = {
  navigation: any
}

const Roster: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={global_styles.container}>
      <Text style={global_styles.text}>Roster</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})

export default Roster