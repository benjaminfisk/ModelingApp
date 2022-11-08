import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { colors } from '../assets/styles'
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import LogoutModal from './LogoutModal';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
import MusicIcon from '../assets/MusicIcon.png';

type HeaderProps = React.ComponentProps<typeof View>;
interface Props extends HeaderProps {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    const { title } = props
    const navigation = useNavigation<any>();
    const Drawer = createDrawerNavigator();

    return (
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
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={40} color={colors.accent} style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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

export default Header