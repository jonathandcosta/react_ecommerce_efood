import { InputGroup, ContainerDelivery, Buttons, ButtonDelivery } from './style'

const CardPayment = () => (
  <ContainerDelivery>
    <div>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <InputGroup>
        <label htmlFor="fullName">Nome no cartão</label>
        <input type="text" id='fullName' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="numberCard">Número do cartão</label>
        <input type="text" id='numberCard' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="cvv">CVV</label>
        <input type="text" id='cvv' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="monthCard">Mês de vencimento</label>
        <input type="text" id='monthCard' />
      </InputGroup>
      <InputGroup>
        <label htmlFor="yearCard">Ano de vencimento</label>
        <input type="text" id='yearCard' />
      </InputGroup>
      <Buttons>
        <ButtonDelivery type='button' title='clique aqui para finalizar o pagamento'>Finalizar pagamento</ButtonDelivery>
        <ButtonDelivery type='button' title='clique aqui para voltar editar o endereço'>Voltar para a edição de endereço</ButtonDelivery>
      </Buttons>
    </div>
  </ContainerDelivery>
)

export default CardPayment