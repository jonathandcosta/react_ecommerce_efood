import { Container } from "../../styles"
import { Banner, TipoPrato, NomePrato } from "./style"

import capa from "../../assets/img/hero2.png"

const BannerDish = () => {

  return (
    <Banner style={{ backgroundImage: `url(${capa})` }}>
      <Container className="container">
        <TipoPrato>Italiana</TipoPrato>
        <NomePrato>La Dolce Vita Trattoria</NomePrato>
      </Container>
    </Banner>
  )
}

export default BannerDish