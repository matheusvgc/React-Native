import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={ButtonsStyle.Buttons}>
            <Button title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </View>
    )
}

const ButtonsStyle = StyleSheet.create({
    Buttons: {
        flexDirection: 'row',
    }
})