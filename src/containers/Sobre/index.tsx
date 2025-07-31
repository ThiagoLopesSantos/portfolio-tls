import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Olá! Sou Thiago Lopes, desenvolvedor em transição de carreira com foco em
      front-end. Estou cursando Desenvolvimento Full Stack Python pela EBAC e
      venho aprimorando minhas habilidades em React, TypeScript, HTML, CSS e
      JavaScript. Este site foi criado como portfólio e prática dos meus
      estudos, com foco em boas práticas, componentização e estilização com
      styled-components. Meu objetivo é crescer como desenvolvedor front-end e
      futuramente fullstack, contribuir em projetos reais com soluções criativas
      e bem estruturadas.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=thiagolopessantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagolopessantos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
