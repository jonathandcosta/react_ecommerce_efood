import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  color: ${cores.secondary};
  margin-bottom: 56px;
  position: relative;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    z-index: 1;
    position: relative;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`

export const TipoPrato = styled.p`
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  padding-top: 25px;
  padding-bottom: 156px;
`

export const NomePrato = styled.h3`
  font-size: 32px;
  font-weight: 900;
`