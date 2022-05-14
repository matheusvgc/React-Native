import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum (num + 1)
    const dec = () => setNum (num - 1)

    return (
        <>
        <Text style={Style.txtG}>
            Contador
        </Text>

        <CounterDisplay num = {num} />

        <CounterButtons inc = {inc} dec = {dec} />
        </>
    )
}