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
        destacado={restaurants.tag}
        capa={restaurants.capa}
        titulo={restaurants.titulo}
        avaliacao={restaurants.avaliacao}
        descricao={restaurants.descricao} />
    ))}
  </List>
)

export default RestaurantList