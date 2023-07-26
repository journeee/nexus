import './Steps.css';

import {motion} from 'framer-motion';

function Steps() {
    return (
        <div className="steps">
            <motion.p initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="steps-title">Our 3 Step Process to Get a Personalized Experience</motion.p>
            <motion.div className="steps-processes">
                <motion.div initial={{opacity: 0, x: "-450px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1.6, delay: 0.2}} className="process">
                    <div className="process-image-1"></div>
                    <p className="process-desc">Complete the E-commerce Readiness Assessment</p>
                </motion.div>
                <motion.div initial={{opacity: 0, x: "-500px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1.5, delay: 0.2}} className="process">
                    <div className="process-image-2"></div>
                    <p className="process-desc">Get a Tailored Roadmap with Courses & Service Recommendations</p>
                </motion.div>
                <motion.div initial={{opacity: 0, x: "-500px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 1.2, delay: 0.2}} className="process">
                    <div className="process-image-3"></div>
                    <p className="process-desc">Start Growing Your Online Business</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Steps;
