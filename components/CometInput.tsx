import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type TextInputProps = React.ComponentProps<typeof TextInput>;
interface Props extends TextInputProps {
    children: string;
}
const CometInput: React.FC<Props> = (props) => {
    return (
        <TextInput style={styles.input} {...props} />
    );
}
const styles = StyleSheet.create({
    input : {
        backgroundColor: 'lightgrey',
        width: 300,
        height: 32,
        padding : 8,
    },

})
export default CometInput