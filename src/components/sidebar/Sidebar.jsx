import { useState, useRef, useEffect } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"

const Sidebar = () => {
    
    const [open,setOpen] = useState(false);
    const btnRef = useRef();

    useEffect(() => {
        const closeDropdown = (e) => {
            if(e.target !== btnRef.current) {
                setOpen(false);
            }
        }

        document.body.addEventListener('click', closeDropdown);

        return () => document.body.removeEventListener('click', closeDropdown);
    }, []);

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
            clipPath: "circle(35px at 50px 50px)",
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
            <ToggleButton setOpen={setOpen} btnRef={btnRef}/>
        </motion.div>
    )
}

export default Sidebar