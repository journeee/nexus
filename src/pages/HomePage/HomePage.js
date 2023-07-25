import './HomePage.css';

// components
import TopMain from "./HomePageComponents/TopMain/TopMain";
import ThreeServices from "./HomePageComponents/ThreeServices/ThreeServices";
import IntroAmazon from "./HomePageComponents/IntroAmazon/IntroAmazon";
import EcommerceAssessment from "./HomePageComponents/EcommerceAssessment/EcommerceAssessment";
import Invitation from "./HomePageComponents/Invitation/Invitation";
import Steps from "./HomePageComponents/Steps/Steps";
import HomePageFooter from "./HomePageComponents/HomePageFooter/HomePageFooter";

function HomePage() {
    return (
        <div>
            <TopMain />
            <ThreeServices />
            <IntroAmazon />
            <EcommerceAssessment />
            <Invitation />
            <Steps />
            <HomePageFooter />
        </div>
    );
}

export default HomePage;
