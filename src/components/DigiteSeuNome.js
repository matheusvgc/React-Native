import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View style={Style.txtG}>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}