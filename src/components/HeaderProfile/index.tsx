import { Link } from 'react-router-dom'
import { ImagemHero, ImagemLogo, Name } from './styles'

import img from '../../assets/img/hero1.png'
import logo from '../../assets/icons/logo.png'

const HeaderProfile = () => (
  <>
    <ImagemHero style={{ backgroundImage: `url(${img})` }}>
      <Link to="/">
        <Name>Restaurantes</Name>
      </Link>
      <ImagemLogo style={{ backgroundImage: `url(${logo})` }}></ImagemLogo>
      <Name>0 Produto no Carrinho</Name>
    </ImagemHero>
  </>
)

export default HeaderProfile
