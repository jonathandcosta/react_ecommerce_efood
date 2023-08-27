import Product from "../Product"
import { Container, List } from './styles'

const ProductList = () => (
    <div className="container">
      <Container>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
    </Container>
    </div>
  
)

export default ProductList