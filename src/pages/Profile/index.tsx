import HeaderProfile from "../../components/HeaderProfile"
import DishCard from "../../components/DishCard"


import { Container } from "../../styles"
import { ContainerList } from "./styles"
import BannerDish from "../../components/BannerDish"



const Profile = () => (
  <>
    <HeaderProfile />
    <BannerDish />
    <Container>
      <ContainerList>
        <DishCard />
        <DishCard />
        <DishCard />
      </ContainerList>
    </Container>
  </>
)

export default Profile