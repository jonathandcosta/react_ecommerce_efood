import { Link } from 'react-router-dom'
import { ImagemHero, ImagemLogo, Name } from './styles'

import img from '../../assets/img/hero1.png'
import logo from '../../assets/icons/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderProfile = () => {
  const dispatch = useDispatch()
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
          <Link to={"#"} onClick={openCart}><Name>0 Produto no Carrinho</Name></Link>
        </ImagemHero>
      </>
    )
  )
}

export default HeaderProfile
