import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../assets/styles'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
import MusicIcon from '../assets/MusicIcon.png';
import closeIcon from '../assets/closeIcon.png';
import accountIcon from '../assets/accountIcon.png';

type HeaderProps = React.ComponentProps<typeof View>;
interface Props extends HeaderProps {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    const { title } = props
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
        <SafeAreaView style={styles.headerBG}>
            <View>
                <LinearGradient colors={["#E57C45", "#EEAA86"]} style={styles.logoHolder}>
                    <Image source={MusicIcon} style={styles.logo} />
                </LinearGradient>
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.filler} />
            <View>
                <TouchableOpacity onPress={() => setDrawerOpen(true)}>
                    <Feather name="menu" size={40} color={colors.accent} style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <Modal visible={drawerOpen} transparent={true} animationType="none">
            <DrawerNavigator onClose={() => setDrawerOpen(false)}/>
        </Modal>
        </>
    )
}

type DrawerNavigatorProps = {
    onClose: () => void;
}
const DrawerNavigator:React.FC<DrawerNavigatorProps> = ({onClose}) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity onPressOut={onClose} style={drawerStyles.container}>
        <TouchableOpacity>
            <TouchableWithoutFeedback>
                <View style={drawerStyles.drawerBG}>
                    <View style={drawerStyles.titleRow}>
                        <View style={drawerStyles.iconsRow}>
                            <Image source={accountIcon} style={drawerStyles.icon} />
                            <Text style={{color: colors.black, fontSize: 16, fontWeight: "500"}}>Firstname L.</Text>
                            <TouchableOpacity onPress={onClose}>
                                <Image source={closeIcon} style={drawerStyles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={drawerStyles.body}>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                            <Text style={drawerStyles.buttonText}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
        </TouchableOpacity>

        
    )
}


const styles = StyleSheet.create({
    headerBG: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 63,
    },
    headerText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
        padding: 8,
    },
    logo: {
        width: 17.42,
        height: 17.42,
    },
    logoHolder: {
        width: 31.11,
        height: 31.11,
        borderRadius: 125,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        marginHorizontal: 16,
    },
    filler: {
        flex: 1,
    },
    menuIcon: {
        marginRight: 16,
    },
})

const drawerStyles = StyleSheet.create({
    drawerBG: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 818,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    icon: {
        width: 32,
        height: 32,
    },
    titleRow: {
        backgroundColor: colors.secondary,
        display: 'flex',
        justifyContent: 'flex-end',
        height: 111,
    },
    iconsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    body: {
        backgroundColor: colors.accent,
        flex: 1,
    },
    buttonText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '400',
        margin: 16,
    },
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }
})
export default Header