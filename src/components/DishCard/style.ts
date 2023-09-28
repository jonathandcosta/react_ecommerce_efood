import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.primary};
  padding: 8px;
  width: 320px;
  color: ${cores.secondary};
  margin-bottom: 32px;
  position: relative;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${cores.secondary};
    border: none;
    color: ${cores.primary};
    font-weight: bold;
    padding: 4px 0;
    cursor: pointer;
  }
`
