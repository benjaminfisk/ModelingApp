import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { global_styles, colors } from '../../assets/styles'
import Header from '../../components/Header'
import CometButton from '../../components/CometButton'
import CometInput from '../../components/CometInput'
import Checkbox from '../../components/Checkbox'

type Props = {
  navigation: any
}

const Manual_Check_In: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={[global_styles.container]}>
      <Header title='MANUAL CHECK-IN' />
      <View style={styles.inputs}>
        <Text style={global_styles.pageTitle}>INPUT INFORMATION</Text>
        <View style={styles.spacer}/>
        <CometInput label='Student Name'/>
        <View style={styles.spacer}/>
        <CometInput label='Student ID'/>
        <View style={styles.spacer}/>
        <CometInput label='Current Time'/>
        <View style={styles.spacer}/>
        <Checkbox label='I verify that this student attended practice.'/>
      </View>
      
      <View style={styles.buttons}>
        <CometButton>Submit</CometButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  inputs: {
    marginLeft: 45,
    marginRight: 45,
    marginTop: 64,
    alignContent: 'center',
  },
  spacer: {
    height: 32,
  },
})

export default Manual_Check_In