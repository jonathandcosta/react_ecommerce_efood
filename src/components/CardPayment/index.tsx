import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputGroup, ContainerDelivery, Error, Buttons, ButtonDelivery } from './style'

const CardPayment = () => {

  const form = useFormik({
    initialValues: {
      fullName: '',
      numberCard: '',
      cvv: '',
      monthCard: '',
      yearCard: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
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
        .required('O campo é obrigatório'),
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
    <ContainerDelivery>
      <form onSubmit={form.handleSubmit}>
        <h2>Pagamento - Valor a pagar R$ 190,90</h2>
        <InputGroup>
          <label htmlFor="fullName">Nome no cartão</label>
          <input
            type="text"
            id='fullName'
            name='fullName'
            value={form.values.fullName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Error>{getErrorMessage('fullName', form.errors.fullName)}</Error>
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
          <ButtonDelivery type='button' title='clique aqui para voltar editar o endereço'>Voltar para a edição de endereço</ButtonDelivery>
        </Buttons>
      </form>
    </ContainerDelivery>
  )
}

export default CardPayment