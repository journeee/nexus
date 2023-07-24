import './HomePage.css';

// components
import TopMain from "./HomePageComponents/TopMain/TopMain";
import ThreeServices from "./HomePageComponents/ThreeServices/ThreeServices";
function HomePage() {
    return (
        <div>
            <TopMain />
            <ThreeServices />
        </div>
    );
}

export default HomePage;
