import React from 'react'
import { View, StyleSheet } from 'react-native'

import Random from './components/Random'
// import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'

// const App = () => {
//     return <Text>Meu Primeiro Componente</Text>
// }

// export default App

// export default () => {
//     return <Text>Componente simplificando a sintaxe</Text>
// }

// export default () => <Text>Componente simplificando mais ainda a sintaxe</Text>

export default () => (
    <View style={style.App}>
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        {/* <MinMax min={3} max={29} />
        <MinMax min={5132} max={3524}/>
        <Primeiro />
        <CompPadrao />
        <Comp1 />
        <Comp2 /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})