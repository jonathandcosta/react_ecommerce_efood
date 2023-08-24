import { createGlobalStyle } from "styled-components"

export const cores = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  background:'#FFF8F2',
  title: '#ffffff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.background};
    color: ${cores.primary};
  }
`