import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="Calculadora IMC com ReactJS"
          descricao="Calculadora simples feita com ReactJS"
          url1="https://github.com/ThiagoLopesSantos/calculadoraIMCReact"
          url2="https://calculadora-imc-react-weld.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Calculadora Aritmética com VueJS"
          descricao="Calculadora simples feita com VueJS"
          url1="https://github.com/ThiagoLopesSantos/calculadora_com_vue"
          url2="https://calculadora-com-vue-orpin.vercel.app/"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
