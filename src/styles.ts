import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: "Inter", sans-serif;
    list-style: none;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.theme as Theme).corDeFundoBotao};

    &:hover {
      color: ${(props) => (props.theme as Theme).corDeFundoBotaoHover};
      text-decoration: underline;
    }
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};

    @media (max-width: 768px) {
      padding-top: 16px;
    }

  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 90px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
