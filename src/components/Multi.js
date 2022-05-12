import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default () => {
    return <Text style={Style.txtG}>Comp #Original</Text>
}

export function Comp1 () {
    return <Text style={Style.txtG}>Comp #01</Text>
}

function Comp2 () {
    return <Text style={Style.txtG}>Comp #02</Text>
}

export { Comp2 }

// Quando a função não é exportada como padrão, ela precisa ser nomeada