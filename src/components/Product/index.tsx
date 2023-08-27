import prato1 from '../../assets/img/sushi.png'
import star from '../../assets/icons/star.png'

import Tag from "../Tag"
import { Card, Descricao, Titulo, Button, TitleRating, ContainerRating, Rating } from './styles'

const Product = () => (
    <Card>
      <Tag size="small">Nacionalidade</Tag>
      <img src={prato1} />
      <TitleRating>
        <Titulo>Nome do prato</Titulo>
        <ContainerRating>
          <Rating>4.9</Rating>
          <img src={star} alt="" />
        </ContainerRating>
      </TitleRating>
      <Descricao>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sed repudiandae veritatis id corporis nulla cum, impedit quas at facilis ut sequi ex explicabo illum quibusdam libero error harum veniam!</Descricao>
      <Button>Saiba mais</Button>
    </Card>
  )
 
export default Product