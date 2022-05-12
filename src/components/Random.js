import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default ({min, max}) => {
    const range = max - min + 1
    const random = parseInt(Math.random() * range) + min

    return (
        <Text style={Style.txtG}>
            O valor aleatório é {random}
        </Text>
    )
}