import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Style from '../estilo'

export default ({ num }) => {
    return (
        <View style = {style.Container}>
            <Text style={[Style.txtG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Num: {
        color: '#fff'
    }
})