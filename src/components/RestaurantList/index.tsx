import Restaurant from "../Restaurant"

import { List } from './styles'

const RestaurantList = () => (
  <List>
    <Restaurant 
      tag={['Destaque da Semana']}
      image={"//placehold.it/472x217"}
      titulo={"Hioki Sushi"}
      avaliacao={4.9}
      descricao={"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"} />
    <Restaurant 
      tag={['Japonesa']}
      image={"//placehold.it/472x217"}
      titulo={"Hioki Sushi"}
      avaliacao={4.9}
      descricao={"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"} />
    <Restaurant 
      tag={['Destaque da Semana', 'Japonesa']}
      image={"//placehold.it/472x217"}
      titulo={"Hioki Sushi"}
      avaliacao={4.9}
      descricao={"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"} />
    <Restaurant 
      tag={['Destaque da Semana', 'Japonesa']}
      image={"//placehold.it/472x217"}
      titulo={"Hioki Sushi"}
      avaliacao={4.9}
      descricao={"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"} />
  </List>
)

export default RestaurantList