import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Thiago Lopes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Engenheiro Front-end
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        <a
          href="https://github.com/ThiagoLopesSantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://www.linkedin.com/in/thiago-lopes-front-end/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema: Dark/Light</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
