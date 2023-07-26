import './HomePageFooter.css';

import {motion} from 'framer-motion';
function HomePageFooter() {
    return (
        <div className="home-footer">
            <motion.p initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="home-footer-title">Introducing: Selling On Amazon Simplified</motion.p>
            <motion.p initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="home-footer-sub">From Listing Optimization to PPC Advertising, our team of experts can help you stand out from your competitors on Amazon. Discover how we can help boost your sales and maximize your profits by visiting our website today!
            </motion.p>
            <motion.div initial={{opacity: 0, y: "100px", background: "#FF236B"}} whileHover={{background: "#fff", cursor: "pointer"}} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 1.1, delay: 0.2}} className="home-footer-button"><motion.span initial={{color: "#fff"}} whileHover={{color: "#FF236B"}} className="button-text">Go To Our Website</motion.span></motion.div>
        </div>
    );
}

export default HomePageFooter;
