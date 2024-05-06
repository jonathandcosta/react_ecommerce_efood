import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`
