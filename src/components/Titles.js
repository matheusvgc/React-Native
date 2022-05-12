import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default props => (
    <>
        <Text style={Style.title}>{props.principal}</Text>
        <Text style={Style.txtG}>{props.secundario}</Text>
    </>
)