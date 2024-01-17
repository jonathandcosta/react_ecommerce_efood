import { Provider } from "react-redux"

import { BrowserRouter } from "react-router-dom"

import { GlobalCss } from "./styles"
import Rotas from './routes'
import Footer from "./components/Footer"
import { store } from "./store"

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div>
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
