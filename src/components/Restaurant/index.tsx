import { Link } from 'react-router-dom'
import { Card, TitleRating, Titulo, ContainerAvaliacao, Avaliacao, Descricao, Button } from './styles'

import Tag from '../Tag'
import star from '../../assets/icons/star.png'

type Props = {
  tag: string[],
  image: string,
  titulo: string,
  avaliacao: number,
  descricao: string
}

const Restaurant = ({ tag, image, titulo, avaliacao, descricao }: Props) => (
  <Card>
    <Tag>{tag}</Tag>
    <img src={image} alt="foto do prato" />
    <TitleRating>
      <Titulo>{titulo}</Titulo>
      <ContainerAvaliacao>
        <Avaliacao>{avaliacao}</Avaliacao>
        <img src={star} alt="estrela" />
      </ContainerAvaliacao>
    </TitleRating>
    <Descricao>{descricao}</Descricao>
    <Button><Link to="/Profile">Saiba mais</Link></Button>
  </Card>
)

export default Restaurant