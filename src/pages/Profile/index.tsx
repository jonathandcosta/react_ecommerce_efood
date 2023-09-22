import HeaderProfile from "../../components/HeaderProfile"


import { Container } from "../../styles"
import { List } from "./styles"



const Profile = () => (
  <>
    <HeaderProfile />
    <p>aqui vem a imagem do restaurante selecionado</p>
    <Container>
      <List>
        <p>aqui vem os pratos do restaurante selecionado</p>
      </List>
    </Container>
  </>
)

export default Profile