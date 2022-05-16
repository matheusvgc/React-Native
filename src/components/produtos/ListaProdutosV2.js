import React from 'react'
import { Text, FlatList } from 'react-native'
import Style from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({item}) => {
        return (
            <Text>
                {item.id}) {item.nome} - R$ {item.preco}
            </Text>
        )
    }

    return (
        <>
            <Text style={Style.txtG}>Lista de produtos V2:</Text>
            <FlatList
                data={produtos}
                keyExtractor={item => `${item.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}