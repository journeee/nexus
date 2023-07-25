import './Invitation.css';

function Invitation() {
    return (
        <div className="invitation">
            <div className="invitation-image"></div>
            <div className="invitation-texts">
                <p className="why">Why Should I Join the Nexus?</p>
                <ol className="reasons">
                    <li>Increase your E-commerce knowledge: <span className="reason-span">Our courses help increase your e-commerce knowledge by providing valuable insights and resources in a user-friendly format.</span></li>
                        <li>Time Saving: <span className="reason-span">Save time with our efficient system that generates customized recommendations based on your specific needs and preferences.</span></li>
                        <li>Tailored Recommendations: <span className="reason-span">Enjoy tailored recommendations that fit your business goals and requirements, helping you make informed decisions and drive growth.</span></li>
                </ol>
            </div>
        </div>
    );
}

export default Invitation;
