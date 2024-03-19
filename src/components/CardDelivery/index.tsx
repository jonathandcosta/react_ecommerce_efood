import { InputGroup, ContainerDelivery, NumberAdress, Buttons, ButtonDelivery } from './style'

const CardDelivery = () => (
  <ContainerDelivery>
    <div>
      <h2>Entrega</h2>
      <InputGroup>
        <label htmlFor="fullName">Quem irá receber</label>
        <input id="fullName" type="text" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="adress">Endereço</label>
        <input id="adress" type="text" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input id="city" type="text" />
      </InputGroup>
      <NumberAdress>
        <InputGroup maxWidth="155px">
          <label htmlFor="cep">CEP</label>
          <input id="cep" type="text" />
        </InputGroup>
        <InputGroup maxWidth="155px">
          <label htmlFor="numberHome">Número</label>
          <input id="numberHome" type="text" />
        </InputGroup>
      </NumberAdress>
      <InputGroup>
        <label htmlFor="completAdress">Complemento (opcional)</label>
        <input id="completAdress" type="text" />
      </InputGroup>
      <Buttons>
        <ButtonDelivery type='button' title='clique aqui para ir ao pagamento'>Continuar com o pagamento</ButtonDelivery>
        <ButtonDelivery type='button' title='clique aqui para voltar ao carrinho'>Voltar para o carrinho</ButtonDelivery>
      </Buttons>
    </div>
  </ContainerDelivery >
)

export default CardDelivery