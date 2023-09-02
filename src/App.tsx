import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HeaderHome from "./components/HeaderHome"
import { Container, GlobalCss } from "./styles"
import RestaurantList from "./components/RestaurantList"

const rotas = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
        <RestaurantList />
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
