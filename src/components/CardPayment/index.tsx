import { useFormik } from 'formik'
import { InputGroup, ContainerDelivery, Buttons, ButtonDelivery } from './style'

const CardPayment = () => {

  const form = useFormik({
    initialValues: {
      fullName: '',
      numberCard: '',
      cvv: '',
      monthCard: '',
      yearCard: '',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)

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
            onBlur={form.handleBlur} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="numberCard">Número do cartão</label>
          <input
            type="text"
            id='numberCard'
            name='numberCard'
            value={form.values.numberCard}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id='cvv'
            name='cvv'
            value={form.values.cvv}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="monthCard">Mês de vencimento</label>
          <input
            type="text"
            id='monthCard'
            name='monthCard'
            value={form.values.monthCard}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="yearCard">Ano de vencimento</label>
          <input
            type="text"
            id='yearCard'
            name='yearCard'
            value={form.values.yearCard}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
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