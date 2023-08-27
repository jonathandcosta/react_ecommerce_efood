import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 50px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    max-width: 100%;
  }
`