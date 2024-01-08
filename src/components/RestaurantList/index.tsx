import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { List } from './styles'

export type Props = {
  restaurant: Restaurants[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <>
    {console.log(restaurant)}
    <List>
      {restaurant.map((restaurants) => (
        <Restaurant
          key={restaurants.id}
          id={restaurants.id}
          destacado={restaurants.destacado}
          capa={restaurants.capa}
          titulo={restaurants.titulo}
          tipo={restaurants.tipo}
          avaliacao={restaurants.avaliacao}
          descricao={restaurants.descricao}
        />
      ))}
    </List>
  </>
)

export default RestaurantList
