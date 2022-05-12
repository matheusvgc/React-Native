import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Style from './estilo'

export default ({inicial = 0, passo = 1}) => {
    // let number = inicial
    const [number, setNumber] = useState(inicial)

    const inc = () => setNumber(number + passo)
    const dec = () => setNumber(number - passo)

    return (
        <>
            <Text style={Style.txtG} >{number}</Text>
            <Button title='+' onPress={inc} />
            <Button title='-' onPress={dec} />
        </>
    )
}