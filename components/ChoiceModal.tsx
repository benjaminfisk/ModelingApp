import CometSmallButton from "./CometSmallButton";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {colors, global_styles} from "../assets/styles";
import {useState} from "react";

type Props = {
    title: string;
    content: string;
    onYes: () => void;
    onNo: () => void;
    onCancel?: () => void;
}
const ChoiceModal: React.FC<Props> = ({ onYes, onNo, onCancel, title, content }) => {
    const cancelAction = onCancel ? onCancel : onNo;

    return (
    <TouchableOpacity onPressOut={cancelAction} activeOpacity={1} style={styles.container}>
        <TouchableOpacity>
            <TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <Text style={[global_styles.pageTitle, styles.title]}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                    
                    <View style={styles.buttons}>
                        <CometSmallButton onPress={onNo} variant="light">No</CometSmallButton>
                        <CometSmallButton onPress={onYes}>Yes</CometSmallButton>
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
  buttons: {
    marginTop: 32,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 32,
    textAlign: 'center',
    fontSize: 16,
  },
  spacer: {
    height: 32,
  },
  modal: {
    width: 333,
    height: 251,

    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }

}
)

export default ChoiceModal