import { useEffect, useState } from "react"
import { ContainerList } from "./styles"
import { useParams } from "react-router-dom"

import HeaderProfile from "../../components/HeaderProfile"
import BannerDish from "../../components/BannerDish"
import DishCard from "../../components/DishCard"

type dish =
  {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }

export type Cardapio = {
  id?: number,
  titulo?: string,
  capa?: string,
  tipo?: string,
  cardapio: dish[]
}

const Profile = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Cardapio>({} as Cardapio)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [id])

  return (
    <>
      <HeaderProfile />
      <BannerDish nome={perfil.titulo} tipo={perfil.tipo} urlImage={perfil.capa} />
      <ContainerList>
        <DishCard cardapio={perfil.cardapio} />
      </ContainerList>
    </>
  )
}

export default Profile