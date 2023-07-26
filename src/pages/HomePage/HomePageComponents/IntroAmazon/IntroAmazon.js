import './IntroAmazon.css';

import {motion} from 'framer-motion';

function IntroAmazon() {
    return (
        <div className="intro-amazon">
            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="intro-amazon-text-container">
                <p className="intro-text">Introducing: Selling On Amazon Simplified</p>
                <p className="intro-sub-1">ShopHowell's 'Selling on Amazon Simplified'</p>
                <p className="intro-sub-2"> is a comprehensive program that teaches you everything you need to know about being an Amazon Seller. The program consists of two main courses: 'How to start selling on Amazon?' and 'How to scale on Amazon?'.

                    Whether you're new to Amazon or already have some experience, our program is designed to help you increase sales and brand awareness. Enroll now and simplify your Amazon selling experience."</p>
                <motion.div whileHover={{background: "#fff", cursor: "pointer"}} className="intro-amazon-enroll-button"><motion.span whileHover={{color: "#FF236B"}} className="button-text">Enroll now</motion.span></motion.div>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{duration: 3, delay: 0.2}} className="intro-amazon-video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bPkXoRTs-YU?si=ZW6HU0uf1VZyfjJU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </motion.div>
        </div>
    );
}

export default IntroAmazon;
