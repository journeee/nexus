import './HomePage.css';

// components
import TopMain from "./HomePageComponents/TopMain/TopMain";
import ThreeServices from "./HomePageComponents/ThreeServices/ThreeServices";
import IntroAmazon from "./HomePageComponents/IntroAmazon/IntroAmazon";
function HomePage() {
    return (
        <div>
            <TopMain />
            <ThreeServices />
            <IntroAmazon />
        </div>
    );
}

export default HomePage;
