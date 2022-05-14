import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Style from '../estilo'


export default props => {
    return (
        <View style={DisplayStyle.Display}>
            <Text style={[Style.txtG, DisplayStyle.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const DisplayStyle = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: '80%'
    },
    DisplayText: {
        color: '#fff'
    }
})