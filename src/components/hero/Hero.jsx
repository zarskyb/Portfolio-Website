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
            delay:1,
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
                
                <div className="typingTextContainer">
                    <h2 className="typingText" id="myName">Michael Bazarsky</h2>
                </div>
                <div className="typingTextContainer">
                    <h1 className="typingText" id="role">Full Stack Developer</h1>
                </div>
                <motion.div 
                    className="textContainer" 
                    variants={textVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    
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
                Passionate Dedicated Creative
            </motion.div>
        </div>
    )
}

export default Hero;