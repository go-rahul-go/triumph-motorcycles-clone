import React from 'react'
import "./finance.css"
import { Link } from 'react-router-dom';


import { MdKeyboardArrowLeft } from "react-icons/md";
import {motion} from "framer-motion"



const Finance = (props) => {
  return (
    <motion.div className="finance-mob-menu" initial={{x:"100vw"}} animate={{x:0}} transition={{duration:0.23}}>
        <MdKeyboardArrowLeft id="moto-close" onClick={()=>props.closeMenu("")}/>
        <div className="mob-moto-h1"> <h1>FINANCE</h1></div>
        <div className='finance-mob-links'>
          <Link>Offers</Link>
          <Link>find out more</Link>
        </div>
    </motion.div>
  )
}

export default Finance;