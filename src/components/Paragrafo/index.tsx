import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode // Usando o ReactNode para receber qualquer conteúdo dentro do componente
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
