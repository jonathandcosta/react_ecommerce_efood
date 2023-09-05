import Tag from '../Tag'
import star from '../../assets/icons/star.png'
import { Card, TitleRating, Titulo, ContainerAvaliacao, Avaliacao, Descricao, Button } from './styles'

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
    <Button>Saiba mais</Button>
  </Card>
)

export default Restaurant