import { Link } from 'react-router-dom'
import { Card, TitleRating, Titulo, ContainerAvaliacao, Avaliacao, Descricao, Button } from './styles'

import Tag from '../Tag'
import star from '../../assets/icons/star.png'

type Props = {
  destacado: string[],
  capa: string,
  titulo: string,
  avaliacao: number,
  descricao: string
}

const Restaurant = ({ destacado, capa, titulo, avaliacao, descricao }: Props) => (
  <Card>
    <Tag>{destacado}</Tag>
    <img src={capa} alt="foto do restaurante" />
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