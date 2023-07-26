import './EcommerceAssessment.css';

import {motion} from 'framer-motion';

function EcommerceAssessment() {
    return (
        <div className="ecommerce-assessment-bg">
        <div  className="ecommerce-assessment">
            <motion.p initial={{opacity: 0, x: "-500px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 3, delay: 0.2}} className="ecommerce-assessment-title"><span className="red-span">Coming Soon:</span> E-Commerce Readiness Assessment</motion.p>
            <motion.p initial={{opacity: 0, x: "500px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 3, delay: 0.2}} className="ecommerce-assessment-sub">To improve your learning experience we're currently developing an E-Commerce Readiness Assessment where our automated system will analyze the data about your business growth stage, goals, and unique needs to curate a personalized educational curriculum and service recommendations.

                This will help your businesses navigate the complex e-commerce ecosystem with greater efficiency and effectiveness, by providing you with a clear roadmap for success.

                </motion.p>
            <motion.p initial={{opacity: 0, x: "-500px"}} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 3, delay: 0.2}} className="ecommerce-assessment-sub-2">Meanwhile we offer you a full range of courses about how to start and scale on Amazon.</motion.p>
            <motion.div initial={{opacity: 0, y: "100px"}} whileHover={{background: "#fff", cursor: "pointer"}} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 1, delay: 0.2}} className="ecommerce-assessment-button"><motion.span whileHover={{color: "#FF236B"}} className="text-button">Go to Our Courses</motion.span></motion.div>
        </div>
        </div>
    );
}

export default EcommerceAssessment;
