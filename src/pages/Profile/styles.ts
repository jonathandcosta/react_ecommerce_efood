import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerList = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
