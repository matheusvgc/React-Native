import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import Style from "../estilo"

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function showValue(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
        <Text style={Style.txtG}>
            {texto}{num}
        </Text>

        <Filho
            min={1}
            max={60}
            funcao={showValue}
        />
        </>
    )
}