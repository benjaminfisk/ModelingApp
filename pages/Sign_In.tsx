import React from 'react'
import { View, Text, StyleSheet, Image,  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { global_styles, colors } from '../assets/styles';
import MusicIcon from '../assets/MusicIcon.png';
import CometButton from '../components/CometButton';
import CometInput from '../components/CometInput';
import Checkbox from '../components/Checkbox';

type Props = {
  navigation: any
}

const Sign_In: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={[global_styles.container, {backgroundColor: colors.accent}]}>
      <LinearGradient colors={["#E57C45", "#EEAA86"]} style={styles.logoHolder}>
        <Image source={MusicIcon} style={styles.logo} />
      </LinearGradient>
      <View style={styles.inputs}>
        <Text style={global_styles.pageTitle}>SIGN IN</Text>
        <View style={styles.spacer}/>
        <CometInput label='Email' />
        <View style={styles.spacer}/>
        <CometInput label='Password' password={true} />
        <View style={styles.spacer}/>
        <Checkbox label='Remember Me'/>
      </View>
      

      <View style={styles.buttons}>
        <CometButton onPress={() => navigation.navigate('Check In')}>Student LOGIN</CometButton>
        <View style={styles.spacer} />
        <CometButton onPress={() => navigation.navigate('Admin Area')}>Admin LOGIN</CometButton>
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
    // background: linear-gradient(180deg, #E57C45 0%, #EEAA86 100%);
  }
})