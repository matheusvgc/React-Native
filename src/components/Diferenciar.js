import React from 'react'
import { Text, Platform } from 'react-native'
import Style from './estilo'

export default _ => {
    if(Platform.OS === 'android') {
        return <Text style={Style.txtG}>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={Style.txtG}>iOS</Text>
    } else {
        return <Text style={Style.txtG}>Não suportado!</Text>
    }
}