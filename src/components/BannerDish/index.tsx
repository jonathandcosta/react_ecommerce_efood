import { Container } from "../../styles"
import { Banner, TipoPrato, NomePrato } from "./style"

//import capa from "../../assets/img/hero2.png"

export type BannerDishProps = {
  urlImage?: string,
  tipo?: string,
  nome?: string
}
const BannerDish = ({ nome, urlImage, tipo }: BannerDishProps) => {

  return (
    <Banner style={{ backgroundImage: `url(${urlImage})` }}>
      <Container className="container">
        <TipoPrato>{tipo}</TipoPrato>
        <NomePrato>{nome}</NomePrato>
      </Container>
    </Banner>
  )
}

export default BannerDish