import { useState } from "react"
import { Card, Modal, ModalContent, Overlay } from "./style"
import { Cardapio } from "../../pages/Profile"
import close from "../../assets/img/close.png"

import { useDispatch } from "react-redux"
import { add, open } from "../../store/reducers/cart"
import { formataPreco } from "../Cart"


const DishCard = ({ cardapio }: Cardapio) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [indexModal, setIndexModal] = useState(0);

  const handleClick = (index: number) => {
    setIndexModal(index)
    setModalEstaAberto(true)
  }

  const dispatch = useDispatch()
  const addToCart = (index: number) => {
    dispatch(add(cardapio[index]))
    dispatch(open())
  }

  return (
    <>
      {cardapio &&
        cardapio.map((item, index) =>
          <Card>
            <img src={item.foto} alt="Pizza" />
            <h1>{item.nome}</h1>
            <p>{item.descricao}</p>
            <button onClick={() => handleClick(index)}>Adicionar ao Carrinho</button>
          </Card>
        )
      }
      {typeof cardapio !== "undefined" &&
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent className="container">
            <header>
              <img src={close} alt="fechar modal" onClick={() => setModalEstaAberto(false)} />
            </header>
            <main>
              <img src={cardapio[indexModal].foto} alt="prato" />
              <div>
                <h3>{cardapio[indexModal].nome}</h3>
                <p>{cardapio[indexModal].descricao}</p>
                <span>{cardapio[indexModal].porcao}</span>
                <button onClick={() => addToCart(indexModal)}>Adicionar ao Carrinho - {formataPreco(cardapio[indexModal].preco)}</button>
              </div>
            </main>
          </ModalContent>
          <Overlay />
        </Modal>
      }
    </>
  )
}

export default DishCard