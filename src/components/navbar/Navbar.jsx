import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <Sidebar/>
                <motion.a 
                    id="backHome"
                    href={`#Homepage`}
                    initial={{opactiy: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    Michael Bazarsky
                </motion.a>
                <div className="social">
                    <a href="https://linkedin.com/in/michael-bazarsky"><img src="/LinkedIn_icon.svg" alt="LinkedIn Icon"></img></a>
                    <a href="https://github.com/mike-bazarsky"><img src="/github_logo.svg" alt="Github Icon"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;