import './CouresSection.css';


function CoursesSection() {
    return (
        <div className="course-section">
            <div className="course-section-blur">
                <div className="blur-course-section-overlay"></div>
                <div className="course-section-content">
                    <p className="course-section-title">Welcome to the Nexus!</p>
                    <div className="course-section-image"></div>
                    <p className="course-section-text">This is your dashboard</p>
                    <p className="course-section-sub-text">The E-Commerce Academy's dashboard displays the user's course progress, recommended courses, and learning resources. It also provides updates on upcoming webinars and community forum access. It's a user-friendly and engaging hub for e-commerce learners to track their progress and stay up-to-date with the latest industry trends.</p>
                    <div className="buttons">
                        <div className="browse-button"><span className="browse-button-text">Browse Courses</span></div>
                        <div className="start-button"><span className="start-button-text">Start Learning</span></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CoursesSection;
