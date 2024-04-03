import styled from 'styled-components'
import { colors } from '../../styles'

export const Background = styled.div`
  width: 100%;
  height: 298px;
  background-color: ${colors.secondary};
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImagemLogo = styled.div`
  width: 125px;
  height: 57.5px;
  background-repeat: no-repeat;
  margin-top: 40px;
`

export const Midia = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32.5px;
  margin-bottom: 80px;
`

export const TextFooter = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`
