import { Pressable, Text, StyleSheet} from 'react-native';

// Example use:
// <CometButton title="LOGIN" onPress={() => Alert.alert('Pressed!')} />
const CometButton = (props) => {
 const { onPress } = props;
 return (
    <Pressable onPress={onPress} style={styles.btn}>
         <Text style={styles.text}>{props.children}</Text>
    </Pressable>
 )
}
const styles = StyleSheet.create({
    btn : {
        backgroundColor: 'lightgrey',
        borderRadius: 32,
        width: 256,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: "700",
    }
})
export default CometButton