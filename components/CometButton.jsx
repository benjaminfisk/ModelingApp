import { Button, View, StyleSheet} from 'react-native';

const CometButton = (props) => {
 const {title, onClick} = props;
 return (
    <View style={styles.btn}>
        <Button onClick={onClick} title={title} />
    </View>
 )
}
const styles = StyleSheet.create({
    btn : {
        width: '100%',
    }
})
export default CometButton