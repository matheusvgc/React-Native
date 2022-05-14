import React from 'react'
import { Text } from 'react-native'

export default props => {
    return (
        <>
            <Text>[Início]Membros da Famíia: </Text>
            {props.children}
            <Text>[Fim]Membros da Famíia: </Text>
        </>
    )
}