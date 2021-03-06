import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: none
    }
  }

  button, input {
    border: none;
    background: transparent;
  }
`