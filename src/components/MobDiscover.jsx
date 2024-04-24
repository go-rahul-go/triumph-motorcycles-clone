import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./mobdiscover.css";
import "./motosidenav.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./accessories.css"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


const MobDiscover = (props) => {
    const [menuName, changeMenuName] = useState("news")
    const handleChange = (menu) => {
        if (menuName === menu)
            changeMenuName("")
        else
            changeMenuName(menu)
    }
    return (
        <motion.div className='mob-discover' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.23 }}>
            <MdKeyboardArrowLeft id="moto-close" onClick={() => props.closeMenu("")} />
            <div className="mob-moto-h1"> <h1 className="mob-moto-h1">for the ride</h1></div>
            <div className='mob-accessories-list'>
                <div className='mal-links' onClick={() => handleChange("news")}>news
                    <IoIosArrowDown className={menuName === "news" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "news" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>latest news</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>motorcycles</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>brand</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>racing</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>epic adventures</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>overview</Link>
                </div>
                <div className='mal-links' onClick={() => handleChange("racing")}>racing
                    <IoIosArrowDown className={menuName === "racing" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "racing" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>motocross and enduro</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>mxgp</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>us racing</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>moto2<sup>TM</sup></Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>ptr triumph</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>overview</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>tiger 1200</Link>
                </div>
                <div className='mal-links' onClick={() => handleChange("brand")}>brand
                    <IoIosArrowDown className={menuName === "brand" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "brand" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>james bond partnership</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>triumph & gibson</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>distinguished gentleman's ride</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>triumph and brietling</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>120 year celebration</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>timeline</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>overview</Link>
                </div>
                <div className='mal-links' onClick={() => handleChange("experience")}>experience
                    <IoIosArrowDown className={menuName === "experience" ? "acc-arrow" : 'acc-arrow acc-arrow-up'} /></div>
                <div className={menuName === "experience" ? "acc-menu-visible" : "acc-menu-hide"}>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>factory visitor experience</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>adventure riding experience</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>distinguished gentleman's ride</Link>
                    <Link to="/discover" onClick={() => { props.changeDisplay(false); props.closeMenu(""); props.changeMobileMenu(false); }}>overview</Link>
                </div>
                <Link className='mal-links'>press reviews
                    <IoIosArrowDown className={"acc-arrow acc-arrow-right"} /></Link>
                <Link className='mal-links'>discover more
                    <IoIosArrowDown className={"acc-arrow acc-arrow-right"} /></Link>
            </div>
            <div className='mob-discover-others'>
                <Link><BsEnvelope className='mob-discover-icon' />email sign up</Link>
                <Link><FaFacebookSquare className='mob-discover-icon' />facebook</Link>
                <Link><SiInstagram className='mob-discover-icon' />Instagram</Link>
            </div>
        </motion.div>
    )
}

export default MobDiscover;