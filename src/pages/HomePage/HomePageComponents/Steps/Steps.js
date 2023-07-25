import './Steps.css';

function Steps() {
    return (
        <div className="steps">
            <p className="steps-title">Our 3 Step Process to Get a Personalized Experience</p>
            <div className="steps-processes">
                <div className="process">
                    <div className="process-image-1"></div>
                    <p className="process-desc">Complete the E-commerce Readiness Assessment</p>
                </div>
                <div className="process">
                    <div className="process-image-2"></div>
                    <p className="process-desc">Get a Tailored Roadmap with Courses & Service Recommendations</p>
                </div>
                <div className="process">
                    <div className="process-image-3"></div>
                    <p className="process-desc">Start Growing Your Online Business</p>
                </div>
            </div>
        </div>
    );
}

export default Steps;
