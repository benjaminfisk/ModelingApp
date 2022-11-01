import React, { useState } from 'react'
import { View, Text } from 'react-native'

type ModalPopUpProps = React.ComponentProps<typeof View>;
interface Props extends ModalPopUpProps {
    title: string;
    content: string;
}

const ModalPopUp: React.FC<Props> = (props) => {
    const { title, content } = props
    return (
        <View>
            
        </View>
    )
}

export default ModalPopUp