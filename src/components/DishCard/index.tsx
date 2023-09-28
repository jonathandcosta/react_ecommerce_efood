import { Card } from "./style"

import food from "../../assets/img/pizza.png"


const DishCard = () => {

  return (
    <>
      <Card>
        <img src={food} alt="Pizza" />
        <h3>Pizza Marguerita</h3>
        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
        <button>Adicionar ao Carrinho</button>
      </Card>
    </>
  )
}

export default DishCard