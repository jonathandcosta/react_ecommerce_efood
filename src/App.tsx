import { BrowserRouter } from "react-router-dom"

import { GlobalCss } from "./styles"
import Rotas from './routes'
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
