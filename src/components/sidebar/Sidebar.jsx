import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"

const Sidebar = () => {
    
    const [open,setOpen] = useState(false);

    const variants = {
        initial: {
            opacity:0
        },
        open: {
            opacity:1,
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            opacity:1,
            clipPath: "circle(30px at 50px 50px)",
            tranistion:{
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"} initial="initial">
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar