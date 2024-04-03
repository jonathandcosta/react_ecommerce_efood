import img from '../../assets/img/hero1.png'
import logo from '../../assets/icons/logo.png'

import { Hero, ImagemHero, ImagemLogo, Title } from './styles'

const HeaderHome = () => (
  <>
    <Hero>
      <ImagemLogo style={{ backgroundImage: `url(${logo})` }}></ImagemLogo>
      <ImagemHero style={{ backgroundImage: `url(${img})` }}>

        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </ImagemHero>

    </Hero>
  </>
)

export default HeaderHome
