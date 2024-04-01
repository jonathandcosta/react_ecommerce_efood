import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const ContainerPayment = styled.div`
  margin-top: 32px;

  h2 {
    color: ${cores.secondary};
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 16px;
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
    color: ${cores.secondary};
  }

  input {
    border: none;
    width: 100%;
    height: 32px;
    background-color: ${cores.secondary};
    font-size: 14px;
    color: #000;
    font-weight: 700;
    line-height: 16px;
    padding: 8px;
  }
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
