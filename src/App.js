import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Mega from './components/mega/Mega'

// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membros'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import CounterV2 from './components/contador/CounterV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Counter from './components/Counter'
// import Button from './components/Button'
// import Titles from './components/Titles'
// import Random from './components/Random'
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
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={6} />   

        {/*/
        <FlexboxV4 />     
        <FlexboxV3 />        
        <FlexboxV2 />        
        <FlexboxV1 />        
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario = {{nome: 'José Guimarães', email: 'jose@gmail.com'}} />
        <UsuarioLogado usuario = {{nome: 'Guilherme Reis'}} />
        <UsuarioLogado usuario = {{email: 'analima@gmail.com'}} />
        <UsuarioLogado usuario = {null} />
        <UsuarioLogado usuario = {{}} />
        <Familia>
            <Membro nome = 'Matheus' sobrenome= 'Garcia' />
            <Membro nome = 'Paula' sobrenome= 'Garcia' />
        </Familia>
        <Familia>
            <Membro nome = 'João' sobrenome= 'Pereira' />
            <Membro nome = 'Carla' sobrenome= 'Pereira' />
            <Membro nome = 'Mauro' sobrenome= 'Pereira' />
            <Membro nome = 'Maria' sobrenome= 'Pereira' />
            <Membro nome = 'Estevão' sobrenome= 'Pereira' />
        </Familia>
        <ParImpar num = {2} />
        <Diferenciar />
        <CounterV2 />
        <Pai />
        <Pai />
        <Counter inicial={10} passo={5}/>
        <Counter passo={29}/>
        <Counter inicial={126}/>
        <Button />
        <Titles principal='Cadastro' secundario='Tela de cadastro do produto' />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <Random min={1} max={60} />
        <MinMax min={3} max={29} />
        <MinMax min={5132} max={3524}/>
        <Primeiro />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})