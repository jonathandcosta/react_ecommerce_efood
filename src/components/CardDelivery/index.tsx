import { useFormik } from 'formik'
import { InputGroup, ContainerDelivery, NumberAdress, Buttons, ButtonDelivery } from './style'

const CardDelivery = () => {

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      numberHome: '',
      completAdress: '',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)

  return (
    <ContainerDelivery>
      <form onSubmit={form.handleSubmit}>
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
        </InputGroup>
        <InputGroup>
          <label htmlFor="adress">Endereço</label>
          <input
            id="adress"
            type="text"
            name='adress'
            value={form.values.adress}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name='city'
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur} />
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
              onBlur={form.handleBlur} />
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
            onBlur={form.handleBlur} />
        </InputGroup>
        <Buttons>
          <ButtonDelivery type='button' title='clique aqui para ir ao pagamento'>Continuar com o pagamento</ButtonDelivery>
          <ButtonDelivery type='button' title='clique aqui para voltar ao carrinho'>Voltar para o carrinho</ButtonDelivery>
        </Buttons>
      </form>
    </ContainerDelivery >
  )
}

export default CardDelivery