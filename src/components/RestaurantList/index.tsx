import Restaurants from "../../models/restaurants"
import Restaurant from "../Restaurant"

import { List } from './styles'

export type Props = {
  restaurant: Restaurants[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <List>
    {restaurant.map((restaurants) => (
      <Restaurant
        key={restaurants.id}
        tag={restaurants.tag}
        image={restaurants.image}
        titulo={restaurants.titulo}
        avaliacao={restaurants.avaliacao}
        descricao={restaurants.descricao} />
    ))}
  </List>
)

export default RestaurantList