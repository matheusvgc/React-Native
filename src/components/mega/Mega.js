import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Style from '../estilo'

import NumeroMega from './NumeroMega'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerearNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerearNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerearNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <NumeroMega key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style = {Style.title}>
                Gerador de Mega-Sena
                </Text>

                <TextInput
                    keyboardType='numeric'
                    style={[{borderBottomWidth: 1, textAlign: 'center', paddingBottom: 5, marginBottom: 10}, Style.txtG]}
                    placeholder='Quantidade de números'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />

                <Button
                title='Gerar'
                onPress={this.gerarNumeros}
                />

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}