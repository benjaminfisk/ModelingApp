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
    pageTitle : {
      color: colors.primary,
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
      lineHeight: 29,
    },
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: colors.accent
    }
  });
  