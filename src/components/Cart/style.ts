import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
  display: none;
  justify-content: flex-end;
  z-index: 1;

  /* classe do carrinho aberto */
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  color: ${colors.title};
  z-index: 1;
  padding: 16px 8px 0px 8px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 85%;
  }

  ul {
    list-style: none;
  }

  button {
    max-width: 100%;
    width: 100%;
    height: 24px;
    background-color: ${colors.secondary};
    border: none;
    color: ${colors.primary};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
  }
`
export const CartItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  width: 344px;
  height: 100px;
  margin-top: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-left: 8px;
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

      @media (max-width: ${breakpoints.tablet}) {
        margin-right: 25px;
      }
    }
  }
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-top: 8px;
  color: ${colors.primary};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`
export const Value = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  color: ${colors.primary};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const Check = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 8px 16px 0px;
`

type InputGroupProps = {
  maxWidth?: string
}

export const ContainerDelivery = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  /* classe do carrinho aberto */
  &.is-open {
    display: flex;
  }

  h2 {
    color: ${colors.secondary};
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

export const ContainerPayment = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  /* classe do carrinho aberto */
  &.is-open {
    display: flex;
  }

  h2 {
    color: ${colors.secondary};
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`
export const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  h3 {
    color: ${colors.secondary};
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

export const ConfirmationSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 344px;
  width: 100%;

  p {
    font-size: 14px;
  }

  button {
    max-width: 100%;
    width: 100%;
    height: 24px;
    background-color: ${colors.secondary};
    border: none;
    color: ${colors.primary};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    margin: 8px 0 8px;
    display: block;
    color: ${colors.secondary};
    width: 344px;
  }

  input {
    border: none;
    width: 100%;
    height: 32px;
    background-color: ${colors.secondary};
    font-size: 14px;
    color: #000;
    font-weight: 700;
    line-height: 16px;
    padding: 8px;
  }
`
export const NumberAdress = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Error = styled.small`
  background-color: red;
`

export const Buttons = styled.div`
  margin-top: 24px;
`
export const ButtonDelivery = styled.button`
  margin-bottom: 8px;
`
