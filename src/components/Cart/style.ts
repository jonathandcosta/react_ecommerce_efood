import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.primary};
  color: ${cores.title};
  z-index: 1;
  padding: 16px 8px 0px 8px;

  ul {
    list-style: none;
  }

  button {
    max-width: 100%;
    width: 100%;
    height: 24px;
    background-color: ${cores.secondary};
    border: none;
    color: ${cores.primary};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
  }
`
export const CartItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${cores.secondary};
  width: 344px;
  height: 100px;
  margin-top: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: fill;
  }

  div {
    margin-left: 8px;
    button {
      width: 16px;
      height: 16px;
      border: none;
      background-color: transparent;
    }
    img {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 76px;
      right: 16px;
    }
  }
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-top: 8px;
  color: ${cores.primary};
`
export const Value = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  color: ${cores.primary};
`

export const Check = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 8px 16px 0px;
`
