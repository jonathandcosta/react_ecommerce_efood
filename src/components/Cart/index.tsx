import { CartContainer, CartItem, Check, Overlay, Sidebar, Title, Value } from "./style"

import trash from '../../assets/img/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}


const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <Title>{item.nome}</Title>
                  <Value>{formataPreco(item.preco)}</Value>
                  <button onClick={() => removeItem(item.id)} type="button" > <img src={trash} alt="lixeira" /></button>
                </div>
              </CartItem>
            ))}
          </ul>
          <Check>
            <p>Valor Total</p>
            <p>{formataPreco(getTotalPrice())} {''}</p>
          </Check>
          <button type="button">Continuar com a entrega</button>
        </Sidebar>
      </CartContainer>
    )
  )
}

export default Cart