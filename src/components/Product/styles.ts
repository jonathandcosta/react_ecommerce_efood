import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: solid 1px ${cores.primary};
  margin: 0 auto;
  margin-top: 80px;
  position: relative;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

   ${TagContainer} {
    position: absolute;
    right: 16px;
    top: 16px;
    display: flex;
    gap: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-left: 7px;
  margin-bottom: 16px;
`

export const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
`
export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  padding: 0px 8px;
  display: block;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${cores.primary};
  color: ${cores.title};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin: 0px 0px 8px 8px;
`