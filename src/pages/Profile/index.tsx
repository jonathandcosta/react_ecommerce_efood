import HeaderProfile from "../../components/HeaderProfile"
import DishCard from "../../components/DishCard"

import { ContainerList } from "./styles"
import BannerDish from "../../components/BannerDish"

const Profile = () => (
  <>
    <HeaderProfile />
    <BannerDish />
    <ContainerList>
      <DishCard />
    </ContainerList>
  </>
)

export default Profile