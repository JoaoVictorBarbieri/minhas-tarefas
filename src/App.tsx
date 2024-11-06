import BarraLateral from './containers/BarraLateral'
import ListadeTarefas from './containers/BarraLateral/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </>
  )
}

export default App
