import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
    
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            duration:20,
            repeat: Infinity,
            repeatType:"mirror",
        },
    },
    
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Michael Bazarsky</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button>
                            See The Latest Works
                        </motion.button>
                        <motion.button>
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
        </div>
    )
}

export default Hero;