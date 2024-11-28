import BarraLateral from '../../containers/BarraLateral'
import ListadeTarefas from '../../containers/ListaDeTarefas/ListaDeTarefas'
import BotaoAdicionar from '../../styles/components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListadeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
