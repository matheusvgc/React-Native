import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default () => {
    console.warn('Mostra na tela o console')
    return(
        <Text style={Style.title}>Primeiro componente!!!</Text>
    )
}