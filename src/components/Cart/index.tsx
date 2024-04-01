import { CartContainer, CartItem, Check, ContainerDelivery, InputGroup, Overlay, Sidebar, Title, Value, NumberAdress, Error, Buttons, ButtonDelivery, ContainerPayment } from "./style"

import trash from '../../assets/img/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useState } from "react"


export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}


const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [openDelivery, setOpenDelivery] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)

  const closeCart = () => {
    dispatch(close())
    setOpenDelivery(false)
  }

  const closeOverlay = () => {
    dispatch(close())
    setOpenDelivery(false)
    setOpenPayment(false)
  }

  const backDelivery = () => {
    setOpenDelivery(true)
    setOpenPayment(false)
  }

  const backCart = () => {
    setOpenDelivery(false)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      numberHome: '',
      completAdress: '',
      cardOwner: '',
      numberCard: '',
      cvv: '',
      monthCard: '',
      yearCard: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberHome: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 5 caracteres')
        .max(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      completAdress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),

      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberCard: Yup.string()
        .min(16, 'Precisa ter 16 caracteres')
        .max(16, 'Precisa ter 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'Precisa ter 3 caracteres')
        .max(3, 'Precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      monthCard: Yup.string()
        .min(2, 'Precisa ter  caracteres')
        .max(4, 'Precisa ter  caracteres')
        .required('O campo é obrigatório'),
      yearCard: Yup.string()
        .min(2, 'Precisa ter 4 caracteres')
        .min(4, 'Precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })


  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      <div>
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Sidebar>
            {items.length > 0 ? (
              <>
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
                <button onClick={() => setOpenDelivery(!openDelivery)} type="button">Continuar com a entrega</button>
              </>
            ) : (
              <>
                <p>Seu carrinho está vazio!
                  <br />
                  <br />
                  Não fique só na vontade, faça seu pedido agora!</p>
              </>
            )}
          </Sidebar>
        </CartContainer >
      </div>
      ) : (
      <form onSubmit={form.handleSubmit}>
        <ContainerDelivery className={openDelivery ? 'is-open' : ''}>
          <Overlay onClick={closeOverlay} />
          <Sidebar>
            <h2>Entrega</h2>
            <InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                id="fullName"
                type="text"
                name='fullName'
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('fullName', form.errors.fullName)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input
                id="adress"
                type="text"
                name='adress'
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('adress', form.errors.adress)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name='city'
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('city', form.errors.city)}</Error>
            </InputGroup>
            <NumberAdress>
              <InputGroup maxWidth="155px">
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  type="text"
                  name='cep'
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <Error>{getErrorMessage('cep', form.errors.cep)}</Error>
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="numberHome">Número</label>
                <input
                  id="numberHome"
                  type="text"
                  name='numberHome'
                  value={form.values.numberHome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <Error>{getErrorMessage('numberHome', form.errors.numberHome)}</Error>
              </InputGroup>
            </NumberAdress>
            <InputGroup>
              <label htmlFor="completAdress">Complemento (opcional)</label>
              <input
                id="completAdress"
                type="text"
                name='completAdress'
                value={form.values.completAdress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Buttons>
              <ButtonDelivery onClick={() => setOpenPayment(!openPayment)} type='button' title='clique aqui para ir ao pagamento'>Continuar com o pagamento</ButtonDelivery>
              <ButtonDelivery onClick={backCart} type='button' title='clique aqui para voltar ao carrinho'>Voltar para o carrinho</ButtonDelivery>
            </Buttons>
          </Sidebar>
        </ContainerDelivery >

        <ContainerPayment className={openPayment ? 'is-open' : ''}>
          <Overlay onClick={closeOverlay} />
          <Sidebar>
            <h2>Pagamento - Valor a pagar R$ 190,90</h2>
            <InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                type="text"
                id='cardOwner'
                name='cardOwner'
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('fullName', form.errors.cardOwner)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="numberCard">Número do cartão</label>
              <input
                type="text"
                id='numberCard'
                name='numberCard'
                value={form.values.numberCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('numberCard', form.errors.numberCard)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id='cvv'
                name='cvv'
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('cvv', form.errors.cvv)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="monthCard">Mês de vencimento</label>
              <input
                type="text"
                id='monthCard'
                name='monthCard'
                value={form.values.monthCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('monthCard', form.errors.monthCard)}</Error>
            </InputGroup>
            <InputGroup>
              <label htmlFor="yearCard">Ano de vencimento</label>
              <input
                type="text"
                id='yearCard'
                name='yearCard'
                value={form.values.yearCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Error>{getErrorMessage('yearCard', form.errors.yearCard)}</Error>
            </InputGroup>
            <Buttons>
              <ButtonDelivery type='button' title='clique aqui para finalizar o pagamento'>Finalizar pagamento</ButtonDelivery>
              <ButtonDelivery onClick={backDelivery} type='button' title='clique aqui para voltar editar o endereço'>Voltar para a edição de endereço</ButtonDelivery>
            </Buttons>
          </Sidebar>
        </ContainerPayment>
      </form>
      )
    </>
  )
}
export default Cart