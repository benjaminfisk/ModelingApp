import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { global_styles } from '../../assets/styles'

type Props = {
  navigation: any
}

const View_All_Checked_In: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={global_styles.container}>
      <Text style={global_styles.text}>View All Checked In</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default View_All_Checked_In