import React from 'react';
import { useState } from 'react';
import { Pressable,  Text, StyleSheet, View } from 'react-native';

import { colors } from '../assets/styles';

type Props = {
    label: string;
}

const Checkbox: React.FC<Props> = (props) => {
    const [checked, setChecked] = useState(false);
    const { label } = props;
    return (
        <View style={styles.outer}>
            <Pressable onPress={() => setChecked(!checked)} style={styles.box}>
                {checked && <View style={styles.check} />}
            </Pressable>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    outer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        backgroundColor: colors.forms,
        width: 20,
        height: 20,
        marginRight: 8,
    },
    text: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: "400",
    },
    check: {
        backgroundColor: colors.primary,
        width: 14,
        height: 14,
        marginLeft: 3,
        marginTop: 3,
    },
})

export default Checkbox