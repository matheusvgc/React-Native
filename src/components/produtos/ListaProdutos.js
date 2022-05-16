import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

import produtos from './produtos'

export default props => {
    function lista() {
        return produtos.map(produto => {
            return (
                <Text key={produto.id}>
                    {produto.id}) {produto.nome} - R$ {produto.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Style.txtG}>Lista de produtos:</Text>
            {lista()}
        </>
    )

    // return (
    //     <>
    //         <Text style={Style.txtG}>Lista de Produtos:</Text>
    //         {produtos.map(produto => {
    //             return <Text key={produto.id}>{produto.id}) {produto.nome} - R$ {produto.preco}</Text>
    //         })}
    //     </>
    // )
}