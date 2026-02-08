import BlueDiv from "../shared/outputs/BlueDiv"
import HomeApp from "../shared/outputs/HomeApp"
import HomeCadRoom from "../shared/outputs/HomeCadRoom"
import HomeDrones from "../shared/outputs/HomeDrones"
import HomeTop from "../shared/outputs/HomeTop"
import OurServicesHome from "../shared/outputs/OurServicesHome"
import WhoWeAreHome from "../shared/outputs/WhoWeAreHome"

const HomeComp = () => {
  return (
    <div className="flex flex-col" >
        <HomeTop/>
        <BlueDiv/>
        <WhoWeAreHome/>
        <OurServicesHome/>
        <HomeDrones/>
        <HomeCadRoom/>
        <HomeApp/>
    </div>
  )
}

export default HomeComp