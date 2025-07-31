import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import { Theme } from '../../themes/dark'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corDeFundoBotaoHover};
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  width: 180px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px ${(props) => (props.theme as Theme).corPrincipal};
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    width: 100%;
  }
`
