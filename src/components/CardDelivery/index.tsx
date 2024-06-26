import { useFormik } from 'formik'
import * as Yup from 'yup'

import { InputGroup, ContainerDelivery, NumberAdress, Error, Buttons, ButtonDelivery } from './style'

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
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
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
          <ButtonDelivery type='button' title='clique aqui para ir ao pagamento'>Continuar com o pagamento</ButtonDelivery>
          <ButtonDelivery type='button' title='clique aqui para voltar ao carrinho'>Voltar para o carrinho</ButtonDelivery>
        </Buttons>
      </form>
    </ContainerDelivery >
  )
}

export default CardDelivery