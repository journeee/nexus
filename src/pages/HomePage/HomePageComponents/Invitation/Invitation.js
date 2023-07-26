import './Invitation.css';

import {motion} from 'framer-motion';
function Invitation() {
    return (
        <div className="invitation">
            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="invitation-image"></motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="invitation-texts">
                <motion.p initial={{y: "-200px"}} whileInView={{ y: 0 }} transition={{duration: 2, delay: 0.2}} className="why">Why Should I Join the Nexus?</motion.p>
                <ol className="reasons">
                    <motion.li initial={{x: "-250px"}} whileInView={{ x: 0 }} transition={{duration: 2, delay: 0.2}}>Increase your E-commerce knowledge: <span className="reason-span">Our courses help increase your e-commerce knowledge by providing valuable insights and resources in a user-friendly format.</span></motion.li>
                        <motion.li initial={{x: "250px"}} whileInView={{ x: 0 }} transition={{duration: 2, delay: 0.2}}>Time Saving: <span className="reason-span">Save time with our efficient system that generates customized recommendations based on your specific needs and preferences.</span></motion.li>
                        <motion.li initial={{x: "-250px"}} whileInView={{ x: 0 }} transition={{duration: 2, delay: 0.2}}>Tailored Recommendations: <span className="reason-span">Enjoy tailored recommendations that fit your business goals and requirements, helping you make informed decisions and drive growth.</span></motion.li>
                </ol>
            </motion.div>
        </div>
    );
}

export default Invitation;
