import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <Sidebar/>
                <motion.span 
                    initial={{opactiy: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    Michael Bazarsky
                </motion.span>
                <div className="social">
                    <a href="https://linkedin.com/in/michael-bazarsky"><img src="/LinkedIn_icon.svg" alt="LinkedIn Icon"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;