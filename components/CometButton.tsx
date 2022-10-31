import React from 'react';
import { Pressable, TouchableOpacity,  Text, StyleSheet} from 'react-native';

import { colors } from '../assets/styles';

type TouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;
interface Props extends TouchableOpacityProps {
    children: string;
}
const CometButton: React.FC<Props> = (props) => {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btn : {
        backgroundColor: colors.primary,
        borderRadius: 32,
        width: 256,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.accent,
        fontSize: 20,
        fontWeight: "700",
    }
})
export default CometButton