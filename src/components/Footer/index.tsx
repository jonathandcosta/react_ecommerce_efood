import logo from '../../assets/icons/logo.png'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

import { Background, ImageContainer, ImagemLogo, Midia, TextFooter } from './styles'

const Footer = () => (
  <Background>
    <ImageContainer>
      <ImagemLogo style={{ backgroundImage: `url(${logo})` }}></ImagemLogo>
      <Midia>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </Midia>
      <TextFooter >A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </TextFooter>
    </ImageContainer>
  </Background>
)

export default Footer

