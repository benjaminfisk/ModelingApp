import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

import { colors } from '../assets/styles';

type TextInputProps = React.ComponentProps<typeof TextInput>;
interface Props extends TextInputProps {
    label: string;
}
const CometInput: React.FC<Props> = (props) => {
    const { label } = props;
    return (
        <View>
            <Text style={styles.formLabel}>{label}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.forms,
        width: 300,
        height: 32,
        padding: 8,
    },
    formLabel: {
        color: colors.primary,
        fontSize: 16,
        marginBottom: 16,
        fontWeight: "500",
        lineHeight: 23,
    },
})
export default CometInput