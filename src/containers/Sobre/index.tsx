import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Estou em transição de carreira para o desenvolvimento front-end, e este
      site foi criado como parte do meu processo de aprendizado e construção de
      portfólio. Aqui aplico na prática os conhecimentos adquiridos com React,
      TypeScript e styled-components, focando em uma estrutura de código
      organizada, componentes reutilizáveis e estilização com tema customizado.
      Meu objetivo é evoluir constantemente, tanto no design quanto na
      implementação dos projetos que serão apresentados aqui.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=thiagolopessantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagolopessantos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
