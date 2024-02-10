import { CartContainer, CartItem, Check, Overlay, Sidebar, Title, Value } from "./style"

import pizza from '../../assets/img/pizza.png'
import trash from '../../assets/img/lixeira-de-reciclagem 1.png'
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"


const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  return (
    (
      <CartContainer className={isOpen ? 'isopen' : ''}>
        <Overlay />
        <Sidebar>
          <ul>
            <CartItem>
              <img src={pizza} alt="" />
              <div>
                <Title>Nome do prato</Title>
                <Value>R$ 60,00</Value>
                <button type="button" > <img src={trash} alt="" /></button>
              </div>
            </CartItem>
            <CartItem>
              <img src={pizza} alt="" />
              <div>
                <Title>Nome do prato</Title>
                <Value>R$ 60,00</Value>
                <button type="button" > <img src={trash} alt="" /></button>
              </div>
            </CartItem>
            <CartItem>
              <img src={pizza} alt="" />
              <div>
                <Title>Nome do prato</Title>
                <Value>R$ 60,00</Value>
                <button type="button" > <img src={trash} alt="" /></button>
              </div>
            </CartItem>
          </ul>
          <Check>
            <p>Valor Total</p>
            <p>R$ 182,70</p>
          </Check>
          <button type="button">Adicionar ao carrinho</button>
        </Sidebar>
      </CartContainer>
    )
  )
}

export default Cart