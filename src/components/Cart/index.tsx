import { useFormik } from "formik"
import * as Yup from 'yup'
import { MouseEventHandler, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from "../../utils"

import * as S from "./style"
import trash from '../../assets/img/lixeira-de-reciclagem 1.png'


const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [openDelivery, setOpenDelivery] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)

  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

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

  const completePurchase = () => {
    dispatch(close())
    location.reload()

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
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numberHome),
            complement: values.completAdress
          }
        },
        payment: {
          card: {
            name: values.fullName,
            number: values.numberCard,
            code: Number(values.cvv),
            expires: {
              mounth: Number(values.monthCard),
              year: Number(values.yearCard)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    //  evento de clique para envio do formulário
  };


  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      <div>
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <S.Title>{item.nome}</S.Title>
                        <S.Value>{parseToBrl(item.preco)}</S.Value>
                        <button onClick={() => removeItem(item.id)} type="button" > <img src={trash} alt="lixeira" /></button>
                      </div>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Check>
                  <p>Valor Total</p>
                  <p>{parseToBrl(getTotalPrice())} {''}</p>
                </S.Check>
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
          </S.Sidebar>
        </S.CartContainer >
      </div>

      {/* INFORMAÇÕES APÓS O PAGAMENTO */}

      {isSuccess && data ? (
        <S.ConfirmationContainer>
          <S.Overlay onClick={closeOverlay} />
          <S.ConfirmationSidebar>
            <h3>Pedido realizado - N°: {data?.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>

            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <button>
              <Link
                to="/"
                type="link"
                title="Clique para voltar para home"
                onClick={completePurchase}
              ></Link>
              Concluir
            </button>
          </S.ConfirmationSidebar>
        </S.ConfirmationContainer>

      ) : (

        // INFORMAÇÕES PARA ENTREGA

        <form onSubmit={form.handleSubmit}>
          <S.ContainerDelivery className={openDelivery ? 'is-open' : ''}>
            <S.Overlay onClick={closeOverlay} />
            <S.Sidebar>
              <h2>Entrega</h2>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  name='fullName'
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('fullName', form.errors.fullName)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="adress">Endereço</label>
                <input
                  id="adress"
                  type="text"
                  name='adress'
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('adress', form.errors.adress)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name='city'
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('city', form.errors.city)}</S.Error>
              </S.InputGroup>
              <S.NumberAdress>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name='cep'
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <S.Error>{getErrorMessage('cep', form.errors.cep)}</S.Error>
                </S.InputGroup>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="numberHome">Número</label>
                  <input
                    id="numberHome"
                    type="text"
                    name='numberHome'
                    value={form.values.numberHome}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <S.Error>{getErrorMessage('numberHome', form.errors.numberHome)}</S.Error>
                </S.InputGroup>
              </S.NumberAdress>
              <S.InputGroup>
                <label htmlFor="completAdress">Complemento (opcional)</label>
                <input
                  id="completAdress"
                  type="text"
                  name='completAdress'
                  value={form.values.completAdress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.Buttons>
                <S.ButtonDelivery
                  onClick={() => setOpenPayment(!openPayment)}
                  type='button'
                  title='clique aqui para ir ao pagamento'>Continuar com o pagamento</S.ButtonDelivery>
                <S.ButtonDelivery
                  onClick={backCart}
                  type='button'
                  title='clique aqui para voltar ao carrinho'>Voltar para o carrinho</S.ButtonDelivery>
              </S.Buttons>
            </S.Sidebar>
          </S.ContainerDelivery >

          {/* INFORMAÇÕES DE PAGAMENTO */}

          <S.ContainerPayment className={openPayment ? 'is-open' : ''}>
            <S.Overlay onClick={closeOverlay} />
            <S.Sidebar>
              <h2>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h2>
              <S.InputGroup>
                <label htmlFor="cardOwner">Nome no cartão</label>
                <input
                  type="text"
                  id='cardOwner'
                  name='cardOwner'
                  value={form.values.cardOwner}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('fullName', form.errors.cardOwner)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="numberCard">Número do cartão</label>
                <input
                  type="text"
                  id='numberCard'
                  name='numberCard'
                  value={form.values.numberCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('numberCard', form.errors.numberCard)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id='cvv'
                  name='cvv'
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('cvv', form.errors.cvv)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="monthCard">Mês de vencimento</label>
                <input
                  type="text"
                  id='monthCard'
                  name='monthCard'
                  value={form.values.monthCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('monthCard', form.errors.monthCard)}</S.Error>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="yearCard">Ano de vencimento</label>
                <input
                  type="text"
                  id='yearCard'
                  name='yearCard'
                  value={form.values.yearCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <S.Error>{getErrorMessage('yearCard', form.errors.yearCard)}</S.Error>
              </S.InputGroup>
              <S.Buttons>
                <S.ButtonDelivery
                  type='submit'
                  onClick={handleClick}
                  title='clique aqui para finalizar a compra'
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
                </S.ButtonDelivery>
                <S.ButtonDelivery onClick={backDelivery} type='button' title='clique aqui para voltar editar o endereço'>Voltar para a edição de endereço</S.ButtonDelivery>
              </S.Buttons>
            </S.Sidebar>
          </S.ContainerPayment>
        </form>
      )}
    </>
  )
}
export default Cart