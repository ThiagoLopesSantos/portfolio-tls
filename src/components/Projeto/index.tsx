import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, GrupoBotoes, LinkBotao } from './styles'

type Props = {
  titulo: string
  descricao: string
  url1: string
  url2: string
}

const Projeto = ({ titulo, descricao, url1, url2 }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <GrupoBotoes>
      <LinkBotao href={url1} target="_blank" rel="noopener noreferrer">
        Visualizar no GitHub
      </LinkBotao>
      <LinkBotao href={url2} target="_blank" rel="noopener noreferrer">
        Visualizar na Vercel
      </LinkBotao>
    </GrupoBotoes>
  </Card>
)

export default Projeto
