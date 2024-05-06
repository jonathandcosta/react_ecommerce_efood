import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ImagemHero = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Name = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${colors.primary};

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 115px;
    margin-left: 5px;
  }
`

export const ImagemLogo = styled.div`
  width: 125px;
  height: 57.5px;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
`
