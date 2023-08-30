import Restaurants from "../../models/restaurants"
import Restaurant from "../Restaurant"
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants}: Props) => (
      <Container>
        <List>
          {restaurants.map((restaurants) => (
            <Restaurant 
              key={restaurants.id}
              tag={restaurants.tag}
              image={restaurants.image}
              titulo={restaurants.titulo}
              avaliacao={restaurants.avaliacao}
              descricao={restaurants.descricao}
            />
          ))}
        </List>
    </Container> 
)

export default RestaurantList