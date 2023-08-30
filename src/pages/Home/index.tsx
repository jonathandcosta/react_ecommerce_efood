import RestaurantList from "../../components/RestaurantList";
import Restaurants from "../../models/restaurants";

import sushi from '../../assets/img/sushi.png'
import pasta from '../../assets/img/pasta.png'


const apresentacao: Restaurants[] = [
  {
    id: 1,
    tag:'Japonesa',
    image: sushi,
    titulo: 'Hioki Sushi',
    avaliacao: 5.0,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    tag:'Italiana',
    image: pasta,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 3.0,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
   <RestaurantList restaurants={apresentacao} />
  </>
)

export default Home