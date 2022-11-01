import React from 'react';
import { Pressable, TouchableOpacity,  Text, StyleSheet} from 'react-native';

import { colors } from '../assets/styles';

type TouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;
interface Props extends TouchableOpacityProps {
    children: string;
    variant?: 'dark' | 'light';
}
const CometSmallButton: React.FC<Props> = (props) => {
    const { onPress } = props;
    const variant = props.variant || 'dark';
    const appliedButton = variant === 'dark' ? styles.darkVariant : styles.lightVariant;
    const appliedText = variant === 'dark' ? styles.darkText : styles.lightText;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, appliedButton]}>
            <Text style={appliedText}>{props.children}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btn : {
        color: colors.accent,
        fontSize: 14,
        fontWeight: "500",
        borderRadius: 32,
        width: 135,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    lightVariant: {
        backgroundColor: colors.accent,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    darkVariant: {
        backgroundColor: colors.primary,
    },
    lightText: {
        color: colors.primary,
    },
    darkText: {
        color: colors.accent,
    },
})
export default CometSmallButton