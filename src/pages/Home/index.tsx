import { Container } from "../../styles"

import RestaurantList from "../../components/RestaurantList"
import HeaderHome from "../../components/HeaderHome"

import { useGetTopRestaurantesQuery } from '../../services/api'


export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: string[]
}

const Home = () => {
  const { data: TopRestaurants } = useGetTopRestaurantesQuery()
  console.log(TopRestaurants)

  if (TopRestaurants) {
    return (
      <>
        <HeaderHome />
        <Container>
          <RestaurantList restaurant={TopRestaurants} />
        </Container>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home