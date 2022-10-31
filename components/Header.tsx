import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { colors } from '../assets/styles'
import { LinearGradient } from 'expo-linear-gradient';


// @ts-ignore
import MusicIcon from '../assets/MusicIcon.png';

type HeaderProps = React.ComponentProps<typeof View>;
interface Props extends HeaderProps {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    const { title } = props
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
            <View>

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
        fontSize: 24,
        fontWeight: 'bold',
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
    }
})

export default Header