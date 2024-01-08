import { useEffect, useState } from "react"
import { Container } from "../../styles"

import RestaurantList from "../../components/RestaurantList"
import HeaderHome from "../../components/HeaderHome"


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
  const [principal, setPrincipal] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPrincipal(res))
  }, [])

  return (
    <>
      <HeaderHome />
      <Container>
        <RestaurantList restaurant={principal} />
      </Container>
    </>
  )
}

export default Home