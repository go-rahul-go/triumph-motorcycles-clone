import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./mobowners.css";
import "./motosidenav.css";
import "./accessories.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoCheckboxOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const MobOwners = (props) => {
    const [menuName, changeMenuName] = useState("total care")
    const handleChange = (menu) => {
        if (menuName === menu) {
            changeMenuName("")
        }
        else {
            changeMenuName(menu)
        }
    }
    return (
        <motion.div className='mob-owners' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.23 }}>
            <MdKeyboardArrowLeft id="moto-close" onClick={() => props.closeMenu("")} />
            <div className="mob-moto-h1"> <h1 className="mob-moto-h1">Owners</h1></div>
            <div className='mob-accessories-list'>
                <div className='mal-links' onClick={() => handleChange("total care")}>total care
                    <IoIosArrowDown className={menuName === "total care" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "total care" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>extended warranty</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }} >service package</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }} >roadside assistance</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }} >bike health check</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }} >customer promise</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>genuine parts</Link>

                </div>
                <div className='mal-links' onClick={() => handleChange("your triumph")}>your triumph
                    <IoIosArrowDown className={menuName === "your triumph" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "your triumph" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>warranty and assistance</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>my triumph app</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>what3words</Link>
                    <Link to="/owner" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>find out more</Link>

                </div>
                <div className='mal-links' onClick={() => handleChange("quick links")}>quick links
                    <IoIosArrowDown className={menuName === "quick links" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "quick links" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link>recalls</Link>
                    <Link>contact us</Link>
                    <Link>find a dealer</Link>

                </div>

            </div>
            <div className='mob-owners-others'>
                <Link><IoCheckboxOutline className='mob-owner-icon' />extended warranty</Link>
                <Link><IoLocationOutline className='mob-owner-icon' />find a dealer</Link>
            </div>
        </motion.div>
    )
}

export default MobOwners;