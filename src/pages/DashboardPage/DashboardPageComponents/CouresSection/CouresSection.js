import './CouresSection.css';
import {motion} from 'framer-motion';

function CoursesSection() {
    return (
        <div className="course-section">
            <div className="course-section-blur">
                <div className="blur-course-section-overlay"></div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 0.2}} className="course-section-content">
                    <p className="course-section-title">Welcome to the Nexus!</p>
                    <div className="course-section-image"></div>
                    <p className="course-section-text">This is your dashboard</p>
                    <p className="course-section-sub-text">The E-Commerce Academy's dashboard displays the user's course progress, recommended courses, and learning resources. It also provides updates on upcoming webinars and community forum access. It's a user-friendly and engaging hub for e-commerce learners to track their progress and stay up-to-date with the latest industry trends.</p>
                    <div className="buttons">
                        <motion.div initial={{background: "none"}} whileHover={{background: "#E01D59"}}  className="browse-button"><motion.span initial={{color: "#E01D59"}} whileHover={{color: "#FFF"}} className="browse-button-text">Browse Courses</motion.span></motion.div>
                        <motion.div className="start-button" initial={{background: "#FF236B", color: "#fff"}} whileHover={{background: "#fff", color: "#FF236B"}}><motion.span className="start-button-text" initial={{background: "#FF236B", color: "#fff"}} whileHover={{background: "#fff", color: "#FF236B"}}>Start Learning</motion.span></motion.div>
                    </div>
                </motion.div>
            </div>
        </div>

    );
}

export default CoursesSection;
