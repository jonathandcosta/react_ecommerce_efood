import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Hero = styled.div`
  display: flex;
  justify-content: center;
`

export const ImagemHero = styled.div `
  width: 100%;
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.primary};
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }

`

export const ImagemLogo = styled.div`
  width: 125px;
  height: 57.5px;
  position: absolute;
  z-index: 1;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px 0 50px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  width: 539px;
  line-height: 42px;
  text-align: center;
  margin-top: 138.5px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 23px;
    width: 350px;
    margin-bottom: 32px;
  }
`