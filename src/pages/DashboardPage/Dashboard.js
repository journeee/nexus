import './Dashboard.css';

import Navbar from "../../UniversalComponents/Navbar";

import CoursesSection from "./DashboardPageComponents/CouresSection/CouresSection";
import AppSection from './DashboardPageComponents/AppSection/AppSection';

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-container">
                <CoursesSection />
                <AppSection />
            </div>
        </div>
    );
}

export default Dashboard;
