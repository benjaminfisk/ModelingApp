import CometButton from "./CometButton";
import CometInput from "./CometInput";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {colors, global_styles} from "../assets/styles";
import {useState} from "react";

type FormData = {
    name: string;
    studentID: string;
    section: string;
}
type Props = {
    title: string;
    onSubmit: (data: FormData) => void;
    onCancel: () => void;
}
const FormModal: React.FC<Props> = ({ onSubmit, onCancel, title }) => {
    const [name, setName] = useState<string>('')
    const [studentID, setStudentID] = useState<string>('')
    const [section, setSection] = useState<string>('')

    const handleSubmit = () => {
        onSubmit({
            name: name,
            studentID: studentID,
            section: section
        });
    };
    

    return (
    <SafeAreaView style={styles.modal}>
      <Text style={[global_styles.pageTitle, styles.title]}>{title}</Text>

      <View style={styles.inputs}>
        <CometInput label='Name' onChangeText={setName}/>
        <View style={styles.spacer}/>
        <CometInput label='Student ID' onChangeText={setStudentID}/>
        <View style={styles.spacer}/>
        <CometInput label='Section' onChangeText={setSection}/>
      </View>
      
      <View style={styles.button}>
        <CometButton onPress={handleSubmit}>Submit</CometButton>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginTop: 32,
  },
  button: {
    marginTop: 64,
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
    height: 514,

    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 16,

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
}
)

export default FormModal