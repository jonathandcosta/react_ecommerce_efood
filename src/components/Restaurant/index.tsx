import { Link } from 'react-router-dom'
import { Card, TitleRating, TagWrapper, Titulo, ContainerAvaliacao, Avaliacao, Descricao, Button } from './styles'

import Tag from '../Tag'
import star from '../../assets/icons/star.png'

type Props = {
  id: number,
  destacado: boolean,
  capa: string,
  tipo: string,
  titulo: string,
  avaliacao: number,
  descricao: string
}

const Restaurant = ({ id, destacado, tipo, capa, titulo, avaliacao, descricao }: Props) => (
  <Card>
    <TagWrapper>
      {destacado && <Tag>{'Destaque da semana'}</Tag>}
      <Tag>{tipo}</Tag>
    </TagWrapper>
    <img src={capa} alt="foto do restaurante" />
    <TitleRating>
      <Titulo>{titulo}</Titulo>
      <ContainerAvaliacao>
        <Avaliacao>{avaliacao}</Avaliacao>
        <img src={star} alt="estrela" />
      </ContainerAvaliacao>
    </TitleRating>
    <Descricao>{descricao}</Descricao>
    <Button><Link to={`/Profile/${id}`}>Saiba mais</Link></Button>
  </Card>
)

export default Restaurant