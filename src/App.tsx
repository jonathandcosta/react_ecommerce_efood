import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HeaderHome from "./components/HeaderHome"
import { Container, GlobalCss } from "./styles"
import Home from "./pages/Home"

const rotas = createBrowserRouter([
  {
    path: '/',
    element:  <Home />
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
