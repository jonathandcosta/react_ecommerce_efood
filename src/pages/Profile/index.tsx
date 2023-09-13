import HeaderProfile from "../../components/HeaderProfile"
import RestaurantList from "../../components/RestaurantList"
import Restaurants from "../../models/restaurants"

import { Container } from "../../styles"
import { List } from "./styles"

import sushi from '../../assets/img/sushi.png'
import pasta from '../../assets/img/pasta.png'
import brownie from '../../assets/img/brownie.png'
import burger from '../../assets/img/burger.png'
import meal from '../../assets/img/meal.png'


const principal: Restaurants[] = [
  {
    id: 1,
    tag: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    titulo: "Hioki Sushi",
    avaliacao: 4.9,
    descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
  },
  {
    id: 2,
    tag: ['Italiana'],
    image: pasta,
    titulo: "La Dolce Vita Trattoria",
    avaliacao: 4.9,
    descricao: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
  },
  {
    id: 3,
    tag: ['Americana'],
    image: burger,
    titulo: "La Dolce Vita Trattoria",
    avaliacao: 4.9,
    descricao: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
  },
  {
    id: 4,
    tag: ['Escócia'],
    image: brownie,
    titulo: "La Dolce Vita Trattoria",
    avaliacao: 4.9,
    descricao: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
  },
  {
    id: 5,
    tag: ['Peru'],
    image: meal,
    titulo: "La Dolce Vita Trattoria",
    avaliacao: 4.9,
    descricao: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
  },
  {
    id: 6,
    tag: ['Peru'],
    image: meal,
    titulo: "La Dolce Vita Trattoria",
    avaliacao: 4.9,
    descricao: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
  },
]

const Profile = () => (
  <>
    <HeaderProfile />
    <Container>
      <List>
        <RestaurantList restaurant={principal} />
      </List>
    </Container>
  </>
)

export default Profile