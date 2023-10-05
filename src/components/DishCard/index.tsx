import { Card, Modal, ModalContent, Overlay } from "./style"
import { useState } from "react";

import food from "../../assets/img/pizza.png"
import close from "../../assets/img/close.png"


const DishCard = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);


  return (
    <>
      <Card>
        <img src={food} alt="Pizza" />
        <h3>Pizza Marguerita</h3>
        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
        <button onClick={() => setModalEstaAberto(true)}>Adicionar ao Carrinho</button>
      </Card>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={() => setModalEstaAberto(false)} />
          </header>
          <main>
            <img src={food} alt="prato" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
              <span>Serve: de 2 a 3 pessoas</span>
              <button>Adicionaro ao Carrinho</button>
            </div>
          </main>
        </ModalContent>
        <Overlay />
      </Modal>
    </>
  )
}

export default DishCard