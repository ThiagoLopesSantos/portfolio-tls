import styled from 'styled-components'
import { Theme } from '../../themes/dark'

export const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 10px double ${(props) => (props.theme as Theme).corPrincipal};
  margin-bottom: 24px;
`
