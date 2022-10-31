import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../assets/styles'

// @ts-ignore
import MusicIcon from '../assets/MusicIcon.png';

type HeaderProps = React.ComponentProps<typeof View>;
interface Props extends HeaderProps {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    const { title } = props
    return (
        <View style={styles.headerBG}>
            <View>
                <Image source={MusicIcon}/>
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBG: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    headerText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    },
    logoHolder: {
        width: 125,
        height: 125,
        borderRadius: 125,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        top: 107,
      }
})

export default Header