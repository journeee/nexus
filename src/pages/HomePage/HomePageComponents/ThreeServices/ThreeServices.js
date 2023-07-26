import './ThreeServices.css';

import { motion } from "framer-motion"

function ThreeServices() {
    return (
        <motion.div className="service-container">
            <motion.div initial={{ opacity: 0, x: "-500px" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, delay: 0.1 }} className="services">
                <div className="one-service-image"></div>
                <p className="service-title">One Stop Shop for
                    E-Commerce Learning</p>
                <p className="service-sub">Our platform offers a comprehensive range of courses and resources for anyone looking to learn about e-commerce.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: "-500px" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.1 }} className="services">
                <div className="two-service-image">

                </div>
                <p className="service-title">Increase Your Amazon Seller Knowledge</p>
                <p className="service-sub">Master the ins and outs of selling on Amazon. Our courses help you succeed on Amazon, from optimizing listings to advertising strategies.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: "-500px" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.1 }} className="services">
                <div className="three-service-image"></div>
                <p className="service-title">Courses From Entry to Advanced Level</p>
                <p className="service-sub">We believe that anyone should be able to learn and succeed in e-commerce, regardless of their level of experience.</p>
            </motion.div>
        </motion.div>
    );
}

export default ThreeServices;
