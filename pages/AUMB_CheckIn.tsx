import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors, global_styles } from '../assets/styles'
import CometButton from '../components/CometButton'
import Header from '../components/Header'
import mapImg from '../assets/map.png'

type Props = {
  navigation: any
}

const AUMB_CheckIn: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={global_styles.container}>
      <Header title="AUMB CHECK-IN"/>
      <View style={styles.titleView}>
        <Text style={global_styles.pageTitle}>PRACTICE LOCATION</Text>
      </View>
      <Image source={mapImg} style={styles.mapImg} />
      <View style={styles.textView}>
        <Text style={{fontWeight: '500', fontSize: 16, color: colors.primary, marginVertical: 8}}>Band Practice Field</Text>
        <Text style={{fontWeight: '400', fontSize: 14, color: colors.primary, marginVertical: 8}}>Linden Ave, Auburn, AL 36832</Text>
      </View>
      <View style={styles.checkInBtn}>
        <CometButton onPress={() => navigation.navigate('Sign In')} >CHECK-IN</CometButton>
      </View>
      <Text style={{fontWeight: '400', fontSize: 14, color: colors.primary}}>Make sure to check-in by 3:30 pm!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  mapImg: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  titleView: {
    alignItems: 'center',
    marginTop: 90
  },
  textView: {
    marginVertical: 8,
    alignItems: 'center'
  },
  checkInBtn: {
    marginTop: 64,
    marginBottom: 32,
  }
})
export default AUMB_CheckIn