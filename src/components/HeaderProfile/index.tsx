import { Link } from 'react-router-dom'
import { ImagemHero, ImagemLogo, Name } from './styles'

import img from '../../assets/img/hero1.png'
import logo from '../../assets/icons/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderProfile = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)


  const openCart = () => {
    dispatch(open())
  }

  return (
    (
      <>
        <ImagemHero style={{ backgroundImage: `url(${img})` }}>
          <Link to="/">
            <Name>Restaurantes</Name>
          </Link>
          <ImagemLogo style={{ backgroundImage: `url(${logo})` }}></ImagemLogo>
          <Link to={"#"} onClick={openCart}><Name>{items.length} Produto no Carrinho</Name></Link>
        </ImagemHero>
      </>
    )
  )
}

export default HeaderProfile
