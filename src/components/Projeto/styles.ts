import styled from 'styled-components'
import { Theme } from '../../themes/dark'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corDaBorda};
  padding: 16px;
  text-align: center;
`
export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size: 14px;
  background-color: ${(props) => (props.theme as Theme).corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).corDeFundoBotaoHover};
    color: ${(props) => (props.theme as Theme).corDeFundo};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`
export const GrupoBotoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    margin-top: 0;
    gap: 0;
  }
`
