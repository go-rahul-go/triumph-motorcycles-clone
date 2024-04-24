import React,{useState} from 'react'
import { motion } from "framer-motion"
import "./accessories.css";
import "./motosidenav.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { PiTrademarkRegisteredBold } from "react-icons/pi";


const Accessories = (props) => {
    const [menuName,changeMenuName]=useState("accessories")
    const handleChange =(menu)=>{
        if(menuName===menu)
            changeMenuName("")
        else{
            changeMenuName(menu)
        }
    }
    return (
        <motion.div className='mob-acc' initial={{x:"100vw"}} animate={{x:0}} transition={{duration:0.23}}>
            <MdKeyboardArrowLeft id="moto-close" onClick={() => props.closeMenu("")} />
            <div className="mob-moto-h1"> <h1 className="mob-moto-h1">Accessories</h1></div>
            <div className='mob-accessories-list'>
               <div className='mal-links' onClick={()=>handleChange("accessories")}>accessories
               <IoIosArrowDown className={menuName==="accessories"?"acc-arrow":'acc-arrow acc-arrow-up'}/></div>
               <div className={menuName==="accessories"?"acc-menu-visible":"acc-menu-hide"}>
                   <Link to="/accessories" onClick={()=>{props.changeMobileMenu(false); props.closeMenu(""); props.changeDisplay(false)}}>configurator</Link>
                   <Link>triumph genuine luggage</Link>
                   <Link>triumph connectivity</Link>
                   <Link>triumph sena bluetooth<sup><PiTrademarkRegisteredBold/></sup></Link>
                   <Link  to="/accessories" onClick={()=>{props.changeMobileMenu(false); props.closeMenu(""); props.changeDisplay(false)}}>customize your ride</Link>
               </div>
               <div className='mal-links'  onClick={()=>handleChange("latest models")}>latest models
               <IoIosArrowDown className={menuName==="latest models"?"acc-arrow":'acc-arrow acc-arrow-up'}/></div>
               <div className={menuName==="latest models"?"acc-menu-visible":"acc-menu-hide"}>
                   <Link>daytona 660</Link>
                   <Link>tiger 900</Link>
                   <Link>scrambler 400x</Link>
                   <Link>speed 400</Link>
                   <Link>street triple rs</Link>
                   <Link>trident 660</Link>
                   <Link>tiger 1200</Link>
                   <Link>rocket 3</Link>
                   <Link>configure</Link>
               </div>
               <div className='mal-links'  onClick={()=>handleChange("quick links")}>quick links
               <IoIosArrowDown className={menuName==="quick links"?"acc-arrow":'acc-arrow acc-arrow-up'}/></div>
               <div className={menuName==="quick links"?"acc-menu-visible":"acc-menu-hide"}>
                   <Link>my triumph app</Link>
                   <Link>muc-off</Link>
                   <Link>find a dealer</Link>
                 
               </div>
               <Link className='mal-links'  to="/accessories" onClick={()=>{props.changeMobileMenu(false); props.closeMenu(""); props.changeDisplay(false)}}>customize
               <IoIosArrowDown className={"acc-arrow acc-arrow-right"}/></Link>     
            </div>
        </motion.div>
    )
}

export default Accessories;