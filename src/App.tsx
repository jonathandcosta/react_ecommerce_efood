import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HeaderHome from "./components/HeaderHome"
import { Container, GlobalCss } from "./styles"
import ProductList from "./components/ProductList"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <HeaderHome />
        <Container>
          <div>
            <RouterProvider router={rotas} />
          </div>
        </Container>
      </div>
      
    </>

  )
}

export default App
