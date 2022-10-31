import { View, Text, StyleSheet, Image } from 'react-native'
import { global_styles, colors } from '../assets/styles';
// @ts-ignore
import MusicIcon from '../assets/MusicIcon.png';
import CometButton from '../components/CometButton';
import CometInput from '../components/CometInput';
import React from 'react'

type Props = {
  navigation: any
}

const Sign_In: React.FC<Props> = ( props ) => {
  const { navigation } = props;
  return (
    <View style={[global_styles.container, {backgroundColor: colors.accent}]}>
      <View style={styles.logoHolder}>
        <Image source={MusicIcon} style={styles.logo} />
      </View>
      <View style={styles.inputs}>
        <Text style={global_styles.pageTitle}>SIGN IN</Text>
        <CometInput label='Email'/>
        <View style={styles.spacer}/>
        <CometInput label='Password'/>
      </View>
      <View style={styles.buttons}>
        <CometButton onPress={() => navigation.navigate('Check In')}>Student Sign In</CometButton>
        <View style={styles.spacer} />
        <CometButton onPress={() => navigation.navigate('Admin Area')}>Admin Sign In</CometButton>
      </View>
    </View>
  )
}
export default Sign_In

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
    marginTop: 38,
    alignContent: 'center',
  },
  spacer: {
    height: 16,
  },
  logo: {
    width: 75,
    height: 75,
  },
  logoHolder: {
    width: 125,
    height: 125,
    borderRadius: 125,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginTop: 102,
  }
})