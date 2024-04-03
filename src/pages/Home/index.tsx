
import HeaderHome from "../../components/HeaderHome"
import RestaurantList from "../../components/RestaurantList"

import { useGetTopRestaurantesQuery } from '../../services/api'

import { Container } from "../../styles"


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