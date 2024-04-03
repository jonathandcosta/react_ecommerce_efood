import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  background: '#FFF8F2',
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
    text-decoration: none;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.primary};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
