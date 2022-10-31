import {StyleSheet} from "react-native";

export const colors = {
  // wireframe colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#E5E5E5',
  darkerGray: '#D9D9D9',

  // high-fi colors
  primary: '#03244D',
  accent: '#FFFFFF',
  secondary: '#EEAA86',
  forms: '#E5E5E5',
}


export const global_styles = StyleSheet.create({
    text : {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    redBG: {
      backgroundColor: '#ff000080',
    },
    blueBG: {
      backgroundColor: '#0000ff80',
    },
    greenBG: {
      backgroundColor: '#00ff0080',
    },
    yellowBG: {
      backgroundColor: '#ffff0080',
    },
  });
  