import CometSmallButton from "./CometSmallButton";
import CometInput from "./CometInput";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {colors, global_styles} from "../assets/styles";
import {useState} from "react";

type Props = {
    title: string;
    content: string;
    onCancel: () => void;
}
const InfoModal: React.FC<Props> = ({ onCancel, title, content }) => {
    return (
    <TouchableOpacity onPressOut={onCancel} style={styles.container}>
        <TouchableOpacity>
            <TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <Text style={[global_styles.pageTitle, styles.title]}>{title}</Text>

                    <View style={styles.inputs}>
                        <Text>{content}</Text>
                    </View>
                    <View style={styles.button}>
                        <CometSmallButton onPress={onCancel} variant='dark'>CLOSE</CometSmallButton>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginTop: 32,
  },
  button: {
    marginTop: 32,
  },
  inputs: {
    width: '100%',
    marginLeft: 42,
    marginRight: 42,
    marginTop: 32,
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    height: 32,
  },
  modal: {
    width: 333,
    height: 210,

    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 16,

    // marginLeft: 'auto',
    // marginRight: 'auto',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

}
)

export default InfoModal